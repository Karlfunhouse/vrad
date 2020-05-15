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
    const { area, area_id } = props.listing 
    const { baths, beds, cost_per_night, superhost} = props.listing.details
    return (
        <div className='listing-info-container'>
            <p>Area: {area}</p>
            <p>Area Id: {area_id}</p>
            <p>Bath: {baths}</p>
            <p>Beds: {beds}</p>
            <p>$ {cost_per_night}</p>
            <p>Superhost: {superhost}</p>
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