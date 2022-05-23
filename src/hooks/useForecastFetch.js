import { useEffect } from "react";

export const useForecastFetch = (searchCity) => {
    const [weatherData, setWeatherData] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    const fetchWeather = async endpoint => {
        try {
            const result = await (await fetch(endpoint)).json();
            return result;
        } catch (error) {
            console.log(error);
        }
    }

    const searchByLocation = (searchCity) => {
        if (searchCity) {
            setLoading(true);
            const search = searchCity.trim();
            fetchWeather(`${process.env.REACT_APP_WEATHER_API_URL}/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${search}&aqi=yes`)
            .then((res) => {
                if (res.status !== '404') {
                    setWeatherData({...res, city: res.location.name, region: res.location.region, country: res.location.country});
                    setError(false);
                }
            });
            setLoading(false);
        } else {
            setError(true);
            setLoading(false);
        }
    }

    useEffect(() => {
        setLoading(true);
        // default fetch
        fetchWeather(`${process.env.REACT_APP_WEATHER_API_URL}/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=Baltimore&aqi=yes`)
        .then((res) => {
            setWeatherData({...res, city: res.location.name, region: res.location.region, country: res.location.country});
        });
    }, []);
    return [weatherData, loading, error, fetchWeather, searchByLocation];
}





