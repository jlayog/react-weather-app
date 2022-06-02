const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const WEATHER_API_URL = process.env.REACT_APP_WEATHER_API_URL;

const DEFAULT_URL = `${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=London&aqi=yes`

export {
    WEATHER_API_KEY,
    WEATHER_API_URL,
    DEFAULT_URL
}