import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';
// import Radium, { StyleRoot } from 'radium';


class App extends Component {
  state = {
    persons: [
      { id: 1, name: "Max", age: 22 },
      { id: 2, name: "Manu", age: 23 },
      { id: 3, name: "Manuel", age: 24 }
    ],
    showPersons: false
  }

  nameChagedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex( p => p.id === id);
    const person = {...this.state.persons[personIndex]};
    person.name = event.target.value;
    
    const persons = [...this.state.persons];
    persons[personIndex] = person;
    console.log(persons);
    this.setState({persons: persons})
  }

  deletePersonHandler = (index) => {
    // create a copy of persons
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons: persons});
  }

  tooglePersonsHandler = () => {
    this.setState({
      showPersons: !this.state.showPersons
    })
  }

  render() {
    const style = {
      backgroundColor: "green",
      color: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      ':hover': {
        backgroundColor: "lightgreen"
      }
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          { this.state.persons.map( (person, index) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.deletePersonHandler(index)}
                changed={(event) => this.nameChagedHandler(event,person.id)}/>
            )
          }) }
        </div>
      )
      // style.backgroundColor="red";
      // style[':hover'] = {
      //   backgroundColor:"salmon",
      //   color: 'black'
      // }
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push('red');
    }
    if (this.state.persons.length <= 1) {
      classes.push('bold');
    }
   

    return (
      // <StyleRoot>
        <div className="App">
          <h1>Hi I'm a React App!</h1>
          <p className={classes.join(' ')}>This is realy working!</p>
          <button 
            style={style}
            onClick={this.tooglePersonsHandler}>Toogle Persons</button>

          { persons }
        </div>
      // </StyleRoot>
    );
  }
}

export default App;
// export default Radium(App);

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