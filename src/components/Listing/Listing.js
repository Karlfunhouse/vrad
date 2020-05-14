import React from 'react'
import PropTypes from 'prop-types'
import './Listing.css'

const Listing = (props) => {

    return (
        <div>
          <h2>{props.listing.name}</h2>
          <h2>{props.listing.address.street}, {props.listing.address.zip}</h2>

        </div>
    )
}

export default Listing

Listing.propTypes = {

}
