import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Header from '../Header/Header'
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'
import ListingContainer from '../ListingContainer/ListingContainer'
import ListingInfo from '../ListingInfo/ListingInfo'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      user: {
        isLoggedIn: false,
        name: '',
        email: '',
        usage: '',
        favoriteListings: []
    }
  }
}

  componentDidMount() {

  }
  
  render() {
    return (
      <div>
        <Header />

        <Login />

        <AreaContainer />

        <ListingContainer />

        <ListingInfo />
      </div>
    )
  }
}


