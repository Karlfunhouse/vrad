import React from 'react'
import PropTypes from 'prop-types'
import './ListingContainer.css'
import Listing from '../Listing/Listing'

const ListingContainer = (props) => {
  const allListings = props.listings.map(listing => {
    return <Listing listing={listing}/>
  })
  console.log(props)
    return (
        <div className="listing-container">
            {allListings}
        </div>
    )
}

export default ListingContainer

ListingContainer.propTypes = {

}
