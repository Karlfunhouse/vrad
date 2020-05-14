import React from 'react'
import PropTypes from 'prop-types'
import './Listing.css'
import { Link } from 'react-router-dom'

const Listing = (props) => {
    const {name} = props.listing
    const {street, zip} = props.listing.address
    return (
        <div className='listing-wrapper'>
          <img
            className='listing-img'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTSfyCWXnhEyzHMXgC13e1JCHct2Mk6ZvrVmQaojy8Y8uhZo41M&usqp=CAU'
            alt=''
          />
          <h2 className='listing-name'>{name}</h2>
          <p className='listing-address'>{street}, {zip}, Denver</p>
         <Link 
            to = {`/listings/${props.listing.listing_id}`}
            onClick={() => props.displayListing(props.listing)}>
            <button 
              className='listing-btn'  
            >
              See Details
            </button>
          </Link>
        </div>
    )
}

export default Listing

Listing.propTypes = {

}
