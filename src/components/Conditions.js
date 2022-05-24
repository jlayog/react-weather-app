import React from "react";

const Conditions = (props) => {
    return (
        <div>
            <div>
                <img src={props.data.current.condition.icon} />
                <p><strong>{props.data.location.name}</strong></p>
                <p>It is currently {Math.round(props.data.current.temp_f)} degrees out with {props.data.current.condition.text.toLowerCase()} skies.</p>
            </div>       
       </div>
    )
}

export default Conditions;