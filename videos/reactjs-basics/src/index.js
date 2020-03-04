import React from 'react';
import ReactDOM from 'react-dom';

import { Header } from './components/Header';
import { Home } from './components/Home';

class App extends React.Component {
  render() {
    // let user = {
    //   name: "Anna",
    //   age: 20,
    //   hobbies: ["Sports", "Asd"]
    // }
    return (
      <div className="container">
        <div className="row">
          <div className="col-12">
            <Header/>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Home name={"Max"} age={20}>
              <p>This is a children paragraph!</p>
            </Home>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App/>,window.document.getElementById("root"));


