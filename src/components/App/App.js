import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Switch, Redirect } from 'react-router-dom'
import './App.css'

import Covid19 from '../Covid19/Covid19'
import Header from '../Header/Header'
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'
import ListingContainer from '../ListingContainer/ListingContainer'
import ListingInfo from '../ListingInfo/ListingInfo'
import {fetchAreas, fetchListings} from '../../fetch'


export default class App extends Component {
  constructor() {
    super()
    this.state = {
        isLoggedIn: false,
        username: '',
        email: '',
        usage: '',
        favoriteListings: [],
        areas: [],
        listings: []
    }
  }


      componentDidMount = () => {
    const url = 'https://vrad-api.herokuapp.com'
    fetch(url + '/api/v1/areas')
    .then(response => response.json())
    .then(areas => {
      const promiseData = areas.areas.map(area => {
        return fetch(url + area.details)
          .then(response => response.json())
          .then(details => {
            return {
              ...details,
              area: area.area
            }
          })
      })
      Promise.all(promiseData)
        .then(resolvedData => {
          this.setState({areas: resolvedData})
        })
    })
    .catch(err => console.error(err))
  }


 displayListings = (listings) => {
   const url = 'https://vrad-api.herokuapp.com'
   const listingsPromises = listings.map(listing => {
     return fetch(url + listing)
     .then(response => response.json())
     .then(listing => {
       return {
         ...listing
       }
     })
   })
   Promise.all(listingsPromises)
   .then(resolvedListings => {
     this.setState({listings: resolvedListings})
   })
   .catch(err => console.error(err))
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
    const { isLoggedIn } = this.state

    return (
      <div>
        <Covid19 />
        <Header />
            <Route path='/'
            exact
            render={() => {
              return <Login checkLogin={this.checkLogin}/>
            }} />


          {!isLoggedIn ?
           <Redirect to = "/"/>
          : <Redirect to = '/areas'/>}

            <Route path='/areas'
            exact
            render={() => {
              return <AreaContainer areas={this.state.areas}
              displayListings={this.displayListings}/>
            }}
            />

            <Route path='/listings'
            exact
            render={() => {
              return <ListingContainer />
            }} />

            <Route path='/listings/id'
            exact
            render={() => {
              return <ListingInfo />
            }} />

      </div>
    )
  }
}
