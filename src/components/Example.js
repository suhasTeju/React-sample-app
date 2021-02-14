import React from 'react'
import exampeCss from "./Example.css"
let  Example = (props) => {return <div className={exampeCss.Example}>
<h1 onClick={props.handler}>This is Children {props.name}with {props.age} years old</h1>
<input type="text" onChange={props.changed} value={props.name}/>
</div>}
export default Example;