import React from 'react';
import PropTypes from 'prop-types'

export class Home extends React.Component {
  render() {
    // let user = this.props.user;
    let name = this.props.name;
    let age = this.props.age;

    return (
      <div>
        <p>Name { name }</p>
        <p>Age { age }</p>
        {/* <div>
          <h4>Hobbies</h4>
          <ul>
            {user.hobbies.map((h,i) => <li key={i}>{h}</li>)}
          </ul>
        </div> */}
        {/* <hr/> */}
      </div>
    )
  }
}

Home.propTypes = {
  name: PropTypes.string,
  age: PropTypes.number
  // user: PropTypes.object,
  // children: PropTypes.element.isRequired
}