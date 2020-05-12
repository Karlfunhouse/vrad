import React from 'react'
import PropTypes from 'prop-types'
import './Covid19.css'

const Covid19 = () => {
    return (
        <div className='covid19-container'>
            <p className='covid19-text'>Get the latest on our COVID-19 response and cancellation policies. </p>
            <a className='covid19-link' href='https://www.coronavirus.gov/' target='_blank'> Learn more</a>
        </div>
    )
}

export default Covid19

Covid19.propTypes = {

}