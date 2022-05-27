import React from "react";

const Conditions = (props) => {

    return (
        <div>
            {props.data.error ?
                <div>
                    <p>{props.data.error.message}</p>
                </div>
                :
                <div className="container">
                    <div><h2><strong>{props.data.location.name}, {Object.is(props.data.location.country, 'United States of America') ? <span>{props.data.location.region}</span> : <span>{props.data.location.country}</span>}</strong></h2></div>
                    <div className="info-header">
                        <h3>{Math.round(props.data.current.temp_f)}°F</h3>
                        <img className="forecast-icon" src={props.data.current.condition.icon} alt={props.data.current.condition.text} />
                    </div>
                    <p>It is currently {Math.round(props.data.current.temp_f)}°F degrees out with {props.data.current.condition.text.toLowerCase()} skies.</p>
                    <p>It feels like {Math.round(props.data.current.feelslike_f)}°F.</p>
                    <span className="last-update"><p>Last updated: {props.data.current.last_updated}</p></span>
                </div>   
            }  
       </div>
    )
}

export default Conditions;