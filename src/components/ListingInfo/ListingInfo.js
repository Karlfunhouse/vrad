import React from 'react'
import PropTypes from 'prop-types'
import './ListingInfo.css'

const ListingInfo = (props) => {
    console.log(props.listing)
    const images = props.listing.img.map(img => {
        console.log(img)
        return <img src={`../../../../public/images/${img}`} />
    })
    const { area, area_id } = props.listing 
    const { baths, beds, cost_per_night, superhost} = props.listing.details
    return (
        <div>ListingInfo
            <div>
                { images }
            </div>
            <p>Area: {area}</p>
            <p>Area Id: {area_id}</p>
            <p>Bath: {baths}</p>
            <p>Beds: {beds}</p>
            <p>$ {cost_per_night}</p>
            <p>Superhost: {superhost}</p>
        </div>
    )
}

export default ListingInfo

ListingInfo.propTypes = {

}