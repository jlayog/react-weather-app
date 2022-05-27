import React, { useState } from "react";
import { useForecastFetch } from '../hooks/useForecastFetch'

const Home = () => {
    const [weatherData, loading, error, fetchWeather, searchByLocation] = useForecastFetch();

    const doSearchLocation = (searchTerm) => {
        searchByLocation(searchTerm);
   }

    return (
        <div>

        </div>
    )
}

export default Home;