import React, { Component } from 'react';
import './App.css';

import Clock from './Clock'

export default class App extends Component {
  state = {
    deadline: 'December 25, 2017',
    newDeadLine: ''
  }

  changeDealine(){
    this.setState({deadline: this.state.newDeadLine})
  }

  render(){
    return <div className='App'>
      <div className="App-title">Countdowm champ {this.state.deadline}</div>
      <div>
        <Clock deadline={this.state.deadline} />
      </div>
      <input
        onChange={event => this.setState({newDeadLine: event.target.value})}
        placeholder='new date' />
      <button onClick={() => this.changeDealine()}>Submit</button>
    </div>
  }
}
