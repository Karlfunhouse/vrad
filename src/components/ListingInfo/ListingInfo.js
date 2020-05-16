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
                <p className='listing-info-p'>
                    Area: <span className='info-accent'>{area}</span>
                </p>
                <p className='listing-info-p'>
                    Address: <span className='info-accent'>{`${street}, ${zip}, Denver`}</span>
                </p>
                <p className='listing-info-p'>
                    Bath: <span className='info-accent'>{baths}</span>
                </p>
                <p className='listing-info-p'>
                    Beds: <span className='info-accent'>{beds}</span>
                </p>
                <p className='listing-info-p'>
                    <span className='info-accent'>${cost_per_night}</span> / night
                </p>
                <p className='listing-info-p'>
                    Superhost: <span className='info-accent'>{superhost ? 'Yes' : 'No'}</span>
                </p>  
                <p className='listing-info-p'>
                    Listing ID: <span className='info-accent'>{listing_id}</span>
                </p>
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