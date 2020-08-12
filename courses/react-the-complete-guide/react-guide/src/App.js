import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 22 },
      { name: "Manu", age: 23 }
    ]
  }

  nameChageHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 22 },
        { name: event.target.value, age: 23 }
      ]
    })
  }

  switchNameHandler = (newName) => {
    this.setState({
      persons: [
        { name: newName, age: 22 },
        { name: "Manu new", age: 23 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    return (
      <div className="App">
        <h1>Hi I'm a React App!</h1>
        <button 
          style={style}
          onClick={() => this.switchNameHandler("New Name 2!")}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this, "New Name!")} />
        <Person 
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          changed={this.nameChageHandler}>My Hobbies: Racing</Person>
      </div>
    );
  }
}

export default App;

// App function component
/*import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

 const App = (props) => {

  const [personsState, setPersonsState] = useState({
    persons: [
      { name: "Max", age: 22 },
      { name: "Manu", age: 23 }
    ]
  })

  // we can use multiple useState
  const [otherState, _] = useState("Some other state!");

  const switchNameHandler = () => {
    setPersonsState({
      persons: [
        { name: "Max New", age: 22 },
        { name: "Manu New", age: 23 }
      ]
    });
  }

  return (
    <div className="App">
      <h1>Hi I'm a React App!</h1>
      <button onClick={switchNameHandler}>Switch Name</button>
      <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
      <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Racing</Person>
    </div>
  );
}

export default App; */