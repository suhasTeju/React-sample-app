import React from 'react'
import Example from '../Example'

const Persons = (props) => ( 
    
    props.persons.map((person, index) => {
    return <Example name={person.name} age={person.age} 
    key={person.id} handler={() => props.clicked(index)} 
    changed={(event) => props.changed(event, person.id)}/>
  }
  ));

export default Persons;