import React, { Component } from 'react'
import axios from 'axios'

const proxyUrl = 'https://cors-anywhere.herokuapp.com/'

class StarWarsList extends Component {
  constructor() {
    super()
    this.state = {
      swResults: []
    }
  }

  componentDidMount() {
    this.fetchSwPeople()
  }

  async fetchSwPeople() {
    let results = await axios.get(proxyUrl + 'https://swapi.co/api/people')
    this.setState({swResults: results.data.results})
    console.log(results.data.results)
  }
  render() {
    const swPeopleList = this.state.swResults.map(item => {
      return(
        <li key={item.name}>{item.name}</li>
      )
    })
    return (
      <div>
        <h1>List of SW people</h1>
        <ul>
          {swPeopleList}
        </ul>
      </div>
    )
  }
}

export default StarWarsList
