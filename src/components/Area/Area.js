import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
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
        <Link
          onClick={() => props.displayListings(listings)}
          to={`/areas/${area.replace(/\s/g, '')}/listings`}
        >
          <button className='listings-btn'>See Listings</button>
        </Link>
      </div>
    )
}

export default Area

Area.propTypes = {
  area: PropTypes.shape({
    about: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    listings: PropTypes.arrayOf(PropTypes.string).isRequired,
    location: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    quick_search: PropTypes.string,
    region_code: PropTypes.number,
  }).isRequired,
  displayListings: PropTypes.func.isRequired
}