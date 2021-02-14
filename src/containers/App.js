
import { Component } from "react";
import appCss from "./App.css"
import Validation from "../components/validation/Validation";
import Char from "../components/char/Char"
import React from 'react'
import Cockpit from "../components/cockpit/cockpit"
import Persons from "../components/person/persons"


class App extends Component{
  state = {"person":[{"id":"aaewr","name":"suhas ","age":23},{"id":"dwqds","name":"teju ","age":23},
  {"id":"qwdwsaq","name":"inom ","age":24}],"showInfo":false,"userInput":"text"}
  toggleHandler = () =>{
    const boo = this.state.showInfo;
    this.setState({"showInfo":!boo});
  }
  deleteHandler = (index) => {
    const personInfo = [...this.state.person]
    personInfo.splice(index,1)
    this.setState({"person":personInfo})
  }
  changeHandler = (event,id) => {
    const personIndex = this.state.person.findIndex( p => {
      return p.id === id;
    });

    const person = {...this.state.person[personIndex]};
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person
    this.setState({"person":persons})
    console.log(this.state.person)

  };
  inputChangeHandler = (event) => {
    this.setState({"userInput":event.target.value});
  };
  deleteinputHandler = (index) => {
    const initial = this.state.userInput.split("")
    initial.splice(index,1)
    this.setState({"userInput":initial.join("")})
  };
  render(){
    const characterList = this.state.userInput.split("").map((ch, index) => {
      return (
        <Char
          character={ch}
          key={index}
          clicked={() => this.deleteinputHandler(index)}
        />
      );
    });

    let personInfo = null;
    if (this.state.showInfo) {
      personInfo = (
        <Persons
          persons={this.state.person}
          clicked={this.deleteHandler}
          changed={this.changeHandler}
        />
      );
    } else {
      personInfo = <h1>Click on button to show info</h1>;
    }

    return (
      <div className={appCss.App}>
        <Cockpit
          showPersonInfo={this.state.showInfo}
          changed={this.toggleHandler} person={this.state.person}
        />
        {personInfo}
        <input
          type="text"
          onChange={this.inputChangeHandler}
          value={this.state.userInput}
        ></input>
        <h1>{this.state.userInput}</h1>
        <Validation length={this.state.userInput.length} />
        <hr />
        <hr />
        {characterList}
      </div>
    );
  }
  
  
}

export default App;
