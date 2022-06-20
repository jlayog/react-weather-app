import React from 'react';
import Background from './Background';
import WeatherCard from './WeatherCard';

//TODO:
//Transitions (react-spring cards for mobile)

const Home = () => {
    return (
        <div>
            <Background />
            <WeatherCard />
        </div>
    )
}

export default Home;