import { React, useState } from 'react';


const Conditions = (props) => {
    const [weatherIcons, setWeatherIcons] = useState("");

    return (
        <div>
            {props.data.error ?
                <div>
                    <p>{Object.is(props.data.error.message, 'Parameter q is missing.') ? <span>No location entered.</span> : <span>{props.data.error.message}</span>}</p>
                </div>
                :
                <div>
                    <div className="container-grid">
                        <div className="child-grid">
                            <div className="left-grid-container">
                                <h2>
                                    <strong>{props.data.location.name}, {Object.is(props.data.location.country, 'United States of America') 
                                        ? <span>{props.data.location.region}</span> 
                                        : <span>{props.data.location.country}</span>}
                                    </strong>
                                </h2>
                                <h3>{Math.round(props.data.current.temp_f)}°F</h3>
                                <img className="forecast-icon" src={props.data.current.condition.icon} alt={props.data.current.condition.text} />
                                <p>{props.data.current.condition.text}</p>
                            </div>
                            <div className="right-grid-container">
                                <div className="blur-bg"></div>
                                <div className="details-overlay">
                                    <div className="searchBar"></div>
                                    <div className="weather-details">
                                        <div className="weather">
                                            <div>Feels like</div>
                                            <div>Humidity</div>
                                            <div>Wind</div>
                                        </div>
                                        <div className="detail">
                                            <div>
                                                <p>{Math.round(props.data.current.feelslike_f)}°F.</p>
                                            </div>
                                            <div>
                                                <p>{Math.round(props.data.current.humidity)}%</p>
                                            </div>
                                            <div>    
                                                <p>{props.data.current.wind_mph}mph</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>   
                    <span className="last-update"><p>Last weather check: {props.data.current.last_updated}</p></span>
                </div>
            }  
       </div>
    )
}

export default Conditions;