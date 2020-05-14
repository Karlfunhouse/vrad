import React from 'react'
import PropTypes from 'prop-types'
import './Area.css'

const Area = (props) => {
  console.log(props);
    return (
        <div className='area-wrapper'>
          <div className={props.area.area}>
            <h2 className='area-area'>{props.area.area}</h2>
          </div>
          <div>
          <h2>{props.area.name}</h2>
          <h3>{props.area.location}</h3>
          <h4>{props.area.about}</h4>
          <button onClick={() => props.displayListings(props.area.listings)}>See Listings</button>
          </div>
        </div>
    )
}

export default Area

Area.propTypes = {

}
