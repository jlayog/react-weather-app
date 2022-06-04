import React from "react";

const Conditions = (props) => {

    return (
        <div>
            {props.data.error ?
                <div>
                    <p>{Object.is(props.data.error.message, 'Parameter q is missing.') ? <span>No location entered.</span> : <span>{props.data.error.message}</span>}</p>
                </div>
                :
                <div>
                    <div className="custom-container">
                        <div className="info-header">
                            <h2>
                                <strong>{props.data.location.name}, {Object.is(props.data.location.country, 'United States of America') 
                                    ? <span>{props.data.location.region}</span> 
                                    : <span>{props.data.location.country}</span>}
                                </strong>
                            </h2>
                        </div>
                        <div className="info-header">
                            <h3>{Math.round(props.data.current.temp_f)}°F</h3>
                            <img className="forecast-icon" src={props.data.current.condition.icon} alt={props.data.current.condition.text} />
                        </div>
                        <p>It is currently {Math.round(props.data.current.temp_f)}°F degrees out with {props.data.current.condition.text.toLowerCase()} skies.</p>
                    </div> 
                    <div className="weather-details">
                        <div>
                            <p>It feels like {Math.round(props.data.current.feelslike_f)}°F.</p>
                        </div>
                        <div>
                            <p>Humidity: {Math.round(props.data.current.humidity)}%</p>
                        </div>
                        <div>    
                            <p>Wind: {props.data.current.wind_mph} mph</p>
                        </div>
                    </div>  
                    <span className="last-update"><p>Last weather check: {props.data.current.last_updated}</p></span>
                </div>
            }  
       </div>
    )
}

export default Conditions;