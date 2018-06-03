import React, { Component } from 'react'

import './fonts/fonts.css'
import './App.css'

import Preloader from './Components/Preloader/Preloader'
import Header from './Components/Header/Header'
import Current from './Components/Current/Current'
import DaysList from './Components/DaysList/DaysList'

const ApiKey = '074e10846bf34b868cd132826180205'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      searchQuery: 'irk',
      locationName: '',
      currentTemp: '',
      icon: '',
      weekForecast: '',
      search: false
    }
    this.getData = this.getData.bind(this)
    this.searchHandler = this.searchHandler.bind(this)
    this.searchToggle = this.searchToggle.bind(this)
    this.onKeySearchToggle = this.onKeySearchToggle.bind(this)
  }

  componentDidMount() {
    this.getData()
  }

  getData() {
    fetch(`https://api.apixu.com/v1/forecast.json?key=${ApiKey}&days=7&lang=ru&q=${this.state.searchQuery}`)
      .then(response => response.json())
      .then(response => this.setState({
          locationName: response.location.name,
          currentTemp: response.current.temp_c,
          icon: response.current.condition.icon,
          weekForecast: response.forecast.forecastday
        })
      )
      .catch(err => null)
  }

  searchToggle() {
    this.setState({
      search: !this.state.search
    })
  }

  onKeySearchToggle(e) {
    if(e.key === 'Enter') {
      this.setState({
        search: false
      })
    }
  }

  searchHandler(e) {
    const searchQuery = e.target.value
    if(searchQuery.length >= 3) {
      fetch(`http://api.apixu.com/v1/current.json?key=${ApiKey}&q=${e.target.value}`)
      .then(response => response.json())
      .then(response => this.setState({
        searchQuery
      }))
      .then(() => this.getData())
    }
  }

  render() {    
    return this.state.weekForecast ? (
        <div className="weather-app">
          <Header
            locationName={this.state.locationName}
            search={this.state.search}
            onKeySearchToggle={this.onKeySearchToggle}
            searchToggle={this.searchToggle}
            searchHandler={this.searchHandler}
          />
          <Current
            currentTemp={this.state.currentTemp}
            icon={this.state.icon}
          />
          <DaysList weekForecast={Array.from(this.state.weekForecast)} />
        </div>
      )
      :
      <Preloader />
  }
}

export default App
