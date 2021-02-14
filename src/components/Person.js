import React,{useState} from 'react';

import "./Person.css"
function Person(props) {
    let  [PersonInfo, setPersonInfo] = useState([{"name":"suhas","age":23}])
    const setpersonState = (myName) =>{
        setPersonInfo([{"name":myName,"age":24}])
    }
    const style = {
        borderColor:"white",
        padding:"5px",
        font:"inherit",
        border:"1px solid blue",
        cursor:"pointer",
    }
    return (
        
      <div className="Person">
        <header className="App-header">
          <h1>hello {PersonInfo[0].name} you are {PersonInfo[0].age}</h1>
        </header>
      </div>
    );
  }
  
  export default Person;