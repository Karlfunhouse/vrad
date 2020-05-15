import React from 'react'
import PropTypes from 'prop-types'
import './ListingInfo.css'

const ListingInfo = (props) => {
    console.log(props.listing)
    const images = props.listing.img.map(img => {
        return <img 
        alt='' 
        className='listing-info-img'
        src={`/images/${img}`} />
    })
    const { 
        name, 
        address, 
        area, 
        listing_id, 
        details 
    } = props.listing 
    const { 
        street, 
        zip 
    } = address
    const { 
        baths, 
        beds, 
        cost_per_night, 
        superhost
    } = details
    
    return (
        <div className='listing-info-container'>
            <div className='listing-info'>
                <h2>{name}</h2>
                <p>{area}</p>
                <p>{`${street}, ${zip}, Denver`}</p>

                <p>Bath: {baths}</p>
                <p>Beds: {beds}</p>
                <p>$ {cost_per_night}</p>
                <p>Superhost: {superhost}</p>
                
                <p>Listing ID: {listing_id}</p>
            </div>
            <div className='slide-gallery'>
                <figure className='slider'>
                    { images }
                </figure>
            </div>
        </div>
    )
}

export default ListingInfo

ListingInfo.propTypes = {

}