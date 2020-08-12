import React from 'react'

import './Person.css'

const Person = (props) => {
  let name = props.name;
  let age = props.age;

  return (
    <div className="Person">
      <p onClick={props.click}>I'm {name} and I'm {age} years old!</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={name}/>
    </div>
  )
}

export default Person;