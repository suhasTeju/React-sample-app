import React,{useEffect,useRef} from 'react';
import cockpitCss from './cockpit.css'

const Cockpit = (props) => {
    let buttonStyle = [cockpitCss.Button]
    useEffect(() => {
        // setTimeout(() => {
        //     alert("deployed to server",10000)
        // })
        button_ref.current.click()


    },[]);
    let classes = [];
    if (props.person.length <= 1){
      classes.push(cockpitCss.bold)
    }
    if (props.person.length <= 2){
      classes.push(cockpitCss.red);
    }
    if (props.showPersonInfo){
        buttonStyle.push(cockpitCss.Red)
    }
    const button_ref = useRef(null)
    return (
      <div>
          <h1>{props.name}</h1>
        <p className={classes.join(" ")}>Person state</p>
        <button className={buttonStyle.join(" ")} ref={button_ref} onClick={props.changed}>
          This is toggle button
        </button>
      </div>
    );

}

export default Cockpit;