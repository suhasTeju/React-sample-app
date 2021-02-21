import React from 'react'
import {Fragment} from 'react'
import exampeCss from "./Example.css"
import PropType from 'prop-types'
let  Example = (props) => {
    
    return (
      <Fragment className={exampeCss.Example}>
        <h1 onClick={props.handler}>
          This is Children {props.name}with {props.age} years old
        </h1>
        <input type="text"  onChange={props.changed} value={props.name} />
      </Fragment>
    );}

    Example.PropType = {
      handler: PropType.func,
      name : PropType.string,
      age: PropType.number,
      changed : PropType.func
    }
  
export default Example;