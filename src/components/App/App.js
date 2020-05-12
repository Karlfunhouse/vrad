import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import './App.css'

import Covid19 from '../Covid19/Covid19'
import Header from '../Header/Header'
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'
import ListingContainer from '../ListingContainer/ListingContainer'
import ListingInfo from '../ListingInfo/ListingInfo'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
        isLoggedIn: false,
        username: '',
        email: '',
        usage: '',
        favoriteListings: [] 
    }
  }

  componentDidMount() {

  }

  checkLogin = (userInfo) => {
    this.setState({
      username: userInfo.username,
      email: userInfo.email,
      usage: userInfo.usage,
      isLoggedIn: true
    })
  }
  
  render() {
    return (
      <div>
        <Covid19 />
        <Header />
        <Router>
          <Switch>
            <Route path='/'
            exact
            render={() => {
              return <Login checkLogin={this.checkLogin}/>
            }} />
          </Switch>

          <Switch>
            <Route path='/areas'
            exact
            render={() => {
              return <AreaContainer />
            }} 
            />
          </Switch>

          <Switch>
            <Route path='/listings'
            exact
            render={() => {
              return <ListingContainer />
            }} />
          </Switch>
        
          <Switch>
            <Route path='/listings/id'
            exact
            render={() => {
              return <ListingInfo />
            }} />
          </Switch>
        </Router>
      </div>
    )
  }
}


