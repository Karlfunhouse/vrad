import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      name: ''
    }
  }
  
  render() {
    return (
      <div>
        <h2>Welcome! Please enter your info:</h2>
        <form>
          <label>
            Username: 
            <input type='text' placeholder='username' required/>
          </label>
          <label>
            Email: 
            <input type='email' placeholder='email' required/>
          </label>
          <label>
            What do you need a place for?
            <input type='radio' id='business' name='usage' value='business' />
            <label for='business'>Business</label>
            <input type='radio' id='vacation' name='usage' value='vacation' />
            <label for='vacation'>Vacation</label>
            <input type='radio' id='party' name='usage' value='party' />
            <label for='party'>Party</label>
          </label>
          <button type='submit'>ENTER</button>
        </form>
      </div>
    )
  }
}










Login.propTypes = {

}

