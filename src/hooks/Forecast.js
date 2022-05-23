import React, { useState, useEffect } from "react";
import Conditions from "../components/Conditions";



const Forecast = () => {
    const [data, setData] = useState();
    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        e.preventDefault();
        setSearchTerm(e.target.value);
        console.log(e.target.value);
    }


    function fetchData() {
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
                console.log(response);
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
                    <input type="text" placeholder="Enter city name" value={searchTerm} onChange={handleChange}/>
                    <button type="submit">Submit</button>
                </form> 
           <button onClick={fetchData}>Get Forecast</button>
           <Conditions data={data} />
       </div>
    )
}

export default Forecast;