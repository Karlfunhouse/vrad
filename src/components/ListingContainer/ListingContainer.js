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
      <section>
        <nav className='listing-container-nav'>
          <Link to="/areas">
              <button className="back-areas-btn">Back To Areas</button>
          </Link>
        </nav>
        <div className="listing-container">
          {allListings}
        </div>
      </section>
    );
}

export default ListingContainer

ListingContainer.propTypes = {

}
