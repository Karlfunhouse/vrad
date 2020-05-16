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
                <h2 className='listing-info-name'>{name}</h2>
                <p className='listing-info-p'>Area: {area}</p>
                <p className='listing-info-p'>Address: {`${street}, ${zip}, Denver`}</p>
                <p className='listing-info-p'>Bath: {baths}</p>
                <p className='listing-info-p'>Beds: {beds}</p>
                <p className='listing-info-p'>${cost_per_night} / night</p>
                <p className='listing-info-p'>Superhost: {superhost}</p>  
                <p className='listing-info-p'>Listing ID: {listing_id}</p>
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