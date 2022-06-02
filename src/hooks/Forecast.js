import React, { useState, useEffect, useRef } from "react";
import Conditions from "../components/Conditions";
import { DEFAULT_URL } from "../api";

// TODO:
// Default loading page
// Styling
// 7 day forecast
// More metrics


const Forecast = () => {
    const [data, setData] = useState(undefined);
    const [searchTerm, setSearchTerm] = useState('');
    const [editMode, setEditMode] = useState(false);
    const ref = useRef();
    const [lat, setLat] = useState('');
    const [long, setLong] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    const handleFocus = (e) => e.target.select();
    
    // highlight text onClick
    useEffect(() => {
        if (editMode) {
            ref.current.select()
        }
    }, [editMode])

    // Prompt user for location
    useEffect(() => {
        // setLoading(true);
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
              });
          } else {
            prompt("Geolocation Not Available");
          }
        // default fetch
        fetch(`${DEFAULT_URL}`)
          .then(response => response.json())
          .then(response => {
              setData(response)
          })
          .catch(err => console.error(err));   
    });

    function fetchData(e) {
        e.preventDefault();
        // const options = {
        //    method: 'GET',
        //    headers: {
        //        "CDN-Status": "200",
        //    }
        // };
        
        fetch(`${process.env.REACT_APP_WEATHER_API_URL}/current.json?key=${process.env.REACT_APP_WEATHER_API_KEY}&q=${searchTerm}&aqi=yes`)
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div>
           <h2>Find Current Weather Conditions</h2>
                <form onSubmit={fetchData}>
                    {/* Needed e.preventDefault onSubmit to keep from refreshing */}
                    <input type="text" placeholder="Enter city name" value={searchTerm} onChange={handleChange} onFocus={handleFocus} onClick={() => setEditMode(!editMode)} ref={ref}/>
                    <button type="submit">Get Forecast</button>
                </form> 
           {/* Need an operator to render depending on data call */}
           {data && <Conditions data={data} />}
       </div>
    )
}

export default Forecast;