import React, { useState } from "react";
import Conditions from "../components/Conditions";



const Forecast = () => {
    const [data, setData] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }


    function fetchData(e) {
        e.preventDefault();
        const options = {
            method: 'GET',
            headers: {
                "CDN-Status": "200",
            }
        };
        
        fetch(`${process.env.REACT_APP_WEATHER_API_URL}/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchTerm}&aqi=yes`, options)
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(data)}
           </div>
                <form onSubmit={fetchData}>
                    {/* --------------- NOTES ------------ */}
                    {/* Needed e.preventDefault onSubmit to keep from refreshing */}
                    <input type="text" placeholder="Enter city name" value={searchTerm} onChange={handleChange}/>
                    <button type="submit">Get Forecast</button>
                </form> 
           {/* Need an operator to render depending on data call */}
           {data && <Conditions data={data} />}
       </div>
    )
}

export default Forecast;