import React, { useState, useEffect, useRef } from 'react';
import Conditions from './Conditions';
import { DEFAULT_URL, WEATHER_API_KEY, WEATHER_API_URL } from "../api";
import { FaSearch } from 'react-icons/fa';
import { useMediaQuery } from 'react-responsive'
import ConditionsMobile from './ConditionsMobile';

const WeatherCard = (props) => {
    // Mobile breakpoints
    const isDesktopOrLaptop = useMediaQuery({ minWidth: 1224 })
    const isMobile = useMediaQuery({ maxWidth: 480 })
    // States
    const [editMode, setEditMode] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [data, setData] = useState(undefined);
    const [childData, setChildData] = useState(undefined);
    // const [lat, setLat] = useState('');
    // const [long, setLong] = useState('');
    const ref = useRef();


    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    }

    // Accessibility
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
        //    if ("geolocation" in navigator) {
        //        navigator.geolocation.getCurrentPosition((position) => {
        //            setLat(position.coords.latitude);
        //            setLong(position.coords.longitude);
        //        });
        //    } else {
        //        prompt("Geolocation Not Available");
        //    }
            // default fetch
            fetch(`${DEFAULT_URL}`)
            .then(response => response.json())
            .then(response => {
                setData(response)
            })
            .catch(err => console.error(err));   
    }, []);

    const fetchData = (e) => {
        e.preventDefault();   
        fetch(`${WEATHER_API_URL}/current.json?key=${WEATHER_API_KEY}&q=${searchTerm}&aqi=yes`)
            .then(response => response.json())
            .then(response => {
                setData(response)
                if (childData) {
                    setData(childData)
                }
            })
            .catch(err => console.error(err));
    }

    return (
        <React.Fragment>
            { isDesktopOrLaptop &&
                <div>
                    { data && <Conditions data={data} /> }
                </div>
            }
            { isMobile &&
                <div>
                    { data && <ConditionsMobile data={data} />}
                </div>
            }
            <div className="input-field searchBar">
                <form onSubmit={fetchData}>
                    {/* Needed e.preventDefault onSubmit to keep from refreshing */}
                    <input type="text" placeholder="Enter location" value={searchTerm} onChange={handleChange} onFocus={handleFocus} onClick={() => setEditMode(!editMode)} ref={ref}/>
                    <button className="searchbtn" type="submit"><FaSearch className="searchIcon" /></button>
                </form>
            </div> 
       </React.Fragment>
    )
}

export default WeatherCard;