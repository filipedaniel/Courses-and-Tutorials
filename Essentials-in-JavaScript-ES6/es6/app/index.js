
// import { students, total } from "./students";

// console.log("Index js file ...");

// console.log(students);
// console.log(total);


// import { add, multi } from './calculator';

// console.log(add(1,2));
// console.log(multi(2,2));


import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class App extends Component {
  render() {
    return (
      <div>React JS and JSX in action!</div>
    )
  }
}

ReactDOM.render(<App></App>, document.getElementById('root'));