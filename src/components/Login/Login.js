import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './Login.css'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      username: '',
      usage: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value 
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.checkLogin(this.state)
  }

  render() {
    const {email, username, usage} = this.state
    const isComplete = email && username && usage ? null : 'disabled'
    return (
      <div className='login-container'>
          <h2>Welcome! Please enter your info:</h2>
          <form className='login-form'>
              <div>
                  <label for='username'>Username: </label>
                  <input 
                    type='text' 
                    placeholder='username'
                    name='username' 
                    required
                    onChange={this.handleChange}
                  />
              </div>
              <div>
                  <label for='email'>Email: </label>
                  <input 
                    type='email' 
                    placeholder='email' 
                    name='email' 
                    required
                    onChange={this.handleChange}
                  />
              </div>
              <div>
                  <label for='usage'>What do you need a place for?</label>  
                  <input 
                    type='radio' 
                    id='business' 
                    name='usage' 
                    value='business' 
                    onClick={this.handleChange}
                    required
                  />
                  <label for='business'>Business</label>
                  <input 
                    type='radio' 
                    id='vacation' 
                    name='usage' 
                    value='vacation' 
                    onClick={this.handleChange}
                  />
                  <label for='vacation'>Vacation</label>
                  <input 
                    type='radio' 
                    id='party' 
                    name='usage' 
                    value='party' 
                    onClick={this.handleChange}
                  />
                  <label for='party'>Party</label>
              </div>
              <div>
                 <Link to='/areas'>
                      <button 
                        type='submit' 
                        onClick={this.handleSubmit} 
                        disabled={isComplete}
                      >ENTER
                      </button>
                  </Link>
              </div>
        </form>
      </div>
    )
  }
}

Login.propTypes = {

}

