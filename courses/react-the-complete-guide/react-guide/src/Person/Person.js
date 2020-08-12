import React from 'react'

const Person = (props) => {
  let name = props.name;
  let age = props.age;

  return (
    <div>
      <p>I'm {name} and I'm {age} years old!</p>
      <p>{props.children}</p>
    </div>
  )
}

export default Person;