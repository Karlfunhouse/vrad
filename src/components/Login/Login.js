import React, { Component } from 'react'
import PropTypes from 'prop-types'
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
          <h2 className='login-message'>Welcome! Please enter your info:</h2>
          <form className='login-form'>
              <div className='login-item'>
                  <label htmlFor='username' className='input-label'>Username: </label>
                  <input 
                    type='text' 
                    placeholder='username'
                    name='username' 
                    required
                    onChange={this.handleChange}
                  />
              </div>
              <div className='login-item'>
                  <label htmlFor='email' className='input-label'>Email: </label>
                  <input 
                    type='email' 
                    placeholder='email' 
                    name='email' 
                    required
                    onChange={this.handleChange}
                  />
              </div>
              <div className='login-item'>
                  <label htmlFor='usage'>What do you need a place for?</label>
                  <div className='login-usage'>
                    <label>
                    <input 
                        type='radio' 
                        id='business' 
                        name='usage' 
                        value='business' 
                        onClick={this.handleChange}
                        required
                      />
                      Business:
                    </label>
                    <label>
                      <input 
                        type='radio' 
                        id='vacation' 
                        name='usage' 
                        value='vacation' 
                        onClick={this.handleChange}
                      />
                      Vacation
                    </label> 
                    <label>
                      <input 
                        type='radio' 
                        id='party' 
                        name='usage' 
                        value='party' 
                        onClick={this.handleChange}
                      />
                      Party
                    </label>
                  </div>
              </div>
              <div className='login-item'>
                  <button 
                    type='submit'
                    className='login-btn' 
                    onClick={this.handleSubmit} 
                    disabled={isComplete}
                  >LOGIN
                  </button>
              </div>
        </form>
      </div>
    )
  }
}


