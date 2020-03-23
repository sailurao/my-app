import React from 'react';

import axios from 'axios';

export default class App extends React.Component {
  state = {
    persons: []
  }

  componentDidMount() {
  // axios.get(`http://jsonplaceholder.typicode.com/users`)
   axios.get(`http://localhost:9090/users`)
//   axios.get(`http://35.232.117.125:9090/users`)
      .then(res => {
        const persons = res.data.result;
        console.log(res);
        console.log(res.data);


        this.setState({ persons });
      })
  }

  render() {
    return (
      <ul>
        { this.state.persons.map(user => <li>{user.email}</li>)}
      </ul>
    )
  }
}