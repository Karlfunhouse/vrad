import React from 'react'
import PropTypes from 'prop-types'
import './ListingContainer.css'
import Listing from '../Listing/Listing'
import { Link } from "react-router-dom"

const ListingContainer = (props) => {
  const allListings = props.listings.map(listing => {
    return <Listing 
        listing={listing} 
        key={listing.id}
        displayListing={props.displayListing}
      />
  })
    return (
      <div className="listing-container">
        <Link to="/areas">
          <button className="back-areas-btn">Back To Areas</button>
        </Link>
        {allListings}
      </div>
    );
}

export default ListingContainer

ListingContainer.propTypes = {

}
