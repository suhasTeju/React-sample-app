import React from 'react'

const char = (props) => {
    let style = {
        display : "inline-block",
        padding : "16px",
        margin : "6px",
        border : "1px solid black",
        textAlign : "center",
        boxShadow : "0 10px 5px rgb(167, 44, 44)"
        
    }
    return(<div style={style} onClick={props.clicked}>{props.character}</div>);

};
export default char;