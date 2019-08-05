import React, { Component } from 'react';
import './App.css';
import PersonList from './Components/PersonList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      firstname: 'Philippe',
      lastname: 'Recto',
      city: 'San Diego',
      state: 'CA',
      tel: '6196089030',
      email: 'precto1285@gmail.com'
    }
  }
  render() {
    return (
      <div className="App">
        <PersonList
          firstname={this.state.firstname}
          lastname={this.state.lastname}
          city={this.state.city}
          state={this.state.state}
          tel={this.state.tel}
          email={this.state.email}
        />
      </div>
    );
  }
}
export default App;
