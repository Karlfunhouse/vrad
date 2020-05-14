import React from 'react'
import PropTypes from 'prop-types'
import './Area.css'

const Area = (props) => {
  console.log(props);
    return (
        <div>
          <div className={props.area.area}></div>
          <h1>{props.area.area}</h1>
          <h2>{props.area.name}</h2>
          <h3>{props.area.location}</h3>
          <h4>{props.area.about}</h4>
          <button onClick={() => props.displayListings(props.area.listings)}>See Listings</button>
        </div>
    )
}

export default Area

Area.propTypes = {

}
