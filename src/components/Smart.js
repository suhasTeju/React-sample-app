import { Component } from "react";
import Person from "./Person";


class Smart extends Component{
    state={
        person:[{"name":"suhas","age":23}]
    }
    nameChangeEventHandler = (name) =>{
        this.setState({person:[{"name":"teju","age":22}]})
      }
    render() {return (<div className="Smart">
        <button onClick={this.nameChangeEventHandler}>This is button</button>
        {this.state.person[0].name} is good hi trying to improve himself in react at age {this.state.person[0].age}
        <Person click={this.nameChangeEventHandler.bind(this,"suhas passed as aurgument")}/>
        </div>) 
        
    }

}

export default Smart;