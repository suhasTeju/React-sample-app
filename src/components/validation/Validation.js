import React from "react";

const validation = (props) => {

    let message = "Text too short";
    if (props.length > 5){
        message = "Text long enough"
    };
    return (<div>
        <p>{message}</p>
    </div>);
};  

export default validation;