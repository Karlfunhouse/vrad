import React from 'react'
import PropTypes from 'prop-types'
import './Listing.css'
import { Link } from 'react-router-dom'

const Listing = (props) => {
    const {name, address, listing_id, img, area, favorite} = props.listing
    const {street, zip} = address
    return (
        <div className='listing-wrapper'>
          <img
            className='listing-img'
            src={`/images/${img[Math.floor(Math.random() * img.length)]}`}
            alt=''
          />
          <h2 className={favorite ? 'listing-name-favorite' : 'listing-name'}>
            {favorite && '\u2764 '}
            {name}
            {favorite && ' \u2764'}
          </h2>
          <p className='listing-address'>{street}, {zip}, Denver</p>
         <Link 
            to = {`/areas/${area}/listings/${listing_id}`}
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
  listing: PropTypes.shape({
    listing_id: PropTypes.number.isRequired,
    area_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      zip: PropTypes.number.isRequired,
    }),
    details: PropTypes.shape({
      neighborhood_id: PropTypes.number.isRequired,
      seller_source: PropTypes.string.isRequired,
      superhost: PropTypes.bool.isRequired,
      beds: PropTypes.number.isRequired,
      baths: PropTypes.number.isRequired,
      cost_per_night: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    dev_id: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    favorite: PropTypes.bool.isRequired,
    db_connect: PropTypes.number,
  }).isRequired,
  displayListing: PropTypes.func.isRequired
}
