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
                    <h2><strong>{props.data.location.name}, {props.data.location.region}</strong></h2>
                    <div className="info-header">
                        <h3>{Math.round(props.data.current.temp_f)}°F</h3>
                        <img className="forecast-icon" src={props.data.current.condition.icon} alt={props.data.current.condition.text} />
                    </div>
                    <p>It is currently {Math.round(props.data.current.temp_f)}°F degrees out with {props.data.current.condition.text.toLowerCase()} skies.</p>
                </div>   
            }  
       </div>
    )
}

export default Conditions;