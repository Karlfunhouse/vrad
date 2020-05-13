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
        favoriteListings: [],
        listings: []
    }
  }

  componentDidMount() {
    const url = 'https://vrad-api.herokuapp.com'
    fetch(url + '/api/v1/areas')
    .then(data => data.json())
    .then(areas => {
      const areasPromise = areas.areas.map(area => {
        return fetch(url + area.details)
        .then(data => data.json())
        .then(listings => {
          const listingPromise = listings.listings.map(listing => {
            return fetch(url + listing)
            .then(data => data.json())
            .then(listing => this.setState({
              listings: [
                ...this.state.listings, {
                  area: area.area,
                  ...listings,
                  listings: [
                   
                    listing
                  ]
                }
              ]
            }))
            .then(() => console.log(this.state.listings))
          }) 
        })
      })
    })
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


