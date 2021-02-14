import React from 'react';
import cockpitCss from './cockpit.css'

const Cockpit = (props) => {
    let buttonStyle = [cockpitCss.Button]
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
    return (
      <div>
        <p className={classes.join(" ")}>Person state</p>
        <button className={buttonStyle.join(" ")} onClick={props.changed}>
          This is toggle button
        </button>
      </div>
    );

}

export default Cockpit;