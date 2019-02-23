import React, { Component } from 'react'
import Hello from './Hello'
import './index.css'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      greetingSubject: "Faraz"
    }
  }

  changeTheName() {
    const names = ['Thomas', 'Faraz', 'Noel', 'Adi']
    var rand = names[Math.floor(Math.random() * names.length)];
    this.setState({greetingSubject: rand})
  }
  
  render() {
    return (
      <div>
        <Hello name={this.state.greetingSubject} />
        <button onClick={this.changeTheName.bind(this)}>
          Change name
        </button>
      </div>
    )
  }
}
export default App

