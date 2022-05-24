import React from "react";

const Conditions = (props) => {
    return (
        <div>
            {props.data.error ?
                <div>
                    <p>{props.data.error.message}</p>
                </div>
                :
                <div>
                    <div className="info-header">
                        <h2>{Math.round(props.data.current.temp_f)}</h2>
                        <img className="forecast-icon" src={props.data.current.condition.icon} alt={props.data.current.condition.text} />
                    </div>
                    <p><strong>{props.data.location.name}</strong></p>
                    <p>It is currently {Math.round(props.data.current.temp_f)} degrees out with {props.data.current.condition.text.toLowerCase()} skies.</p>
                </div>   
            }
                
       </div>
    )
}

export default Conditions;