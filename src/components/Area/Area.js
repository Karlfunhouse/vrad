import React from 'react'
import PropTypes from 'prop-types'
import './Area.css'

const Area = (props) => {
    const { 
      area, 
      name, 
      location, 
      about, 
      listings
    } = props.area
    
    return (
        <div className='area-wrapper'>
          <div className={area}>
            <h2 className='area-area'>{area}</h2>
          </div>
          <div className='area-info'>
            <h2 className='area-name'>{name}</h2>
            <p className='area-location'>{location}</p>
            <p className='area-about'>{about}</p>
          </div>
          <button 
            className='listings-btn'
            onClick={() => props.displayListings(listings)}
          >
            See Listings
          </button>
        </div>
    )
}

export default Area

Area.propTypes = {

}
