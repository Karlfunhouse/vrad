import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './Covid19.css'

class Covid19 extends Component {
    constructor() {
        super()
        this.state = {
            display: 'covid19-container'
        }
    }

    hide = () => {
        this.setState({
            display: 'hide'
        })
    }

    render() {
        return (
            <div className={this.state.display}>
                <p className='covid19-text'>
                    Get the latest on our COVID-19 response and cancellation policies.
                </p>
                <a className='covid19-link' href='https://www.coronavirus.gov/' target='_blank'>
                    Learn more
                </a>
                <button className='covid19-close-btn' onClick={this.hide}>
                    X
                </button>
            </div>
        )
    }
}

export default Covid19

Covid19.propTypes = {

}