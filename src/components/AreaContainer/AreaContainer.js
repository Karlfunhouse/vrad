import React from 'react'
import PropTypes from 'prop-types'
import './AreaContainer.css'
import Area from '../Area/Area'

const AreaContainer = (props) => {
  const areasInfo = props.areas.map(area => {
      console.log(area);
      
    return <Area 
            area={area} 
            key={area.id} 
            displayListings={props.displayListings} 
        />
    })
    return (
        <div className='area-container'>
            { areasInfo }
        </div>
    )
}

export default AreaContainer

AreaContainer.propTypes = {
    areas: PropTypes.arrayOf(PropTypes.shape({
            about: PropTypes.string.isRequired,
            area: PropTypes.string.isRequired,
            id: PropTypes.number.isRequired,
            listings: PropTypes.arrayOf(PropTypes.string),
            location: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired,
            quick_search: PropTypes.string,
            region_code: PropTypes.number,
    })).isRequired,
    displayListings: PropTypes.func.isRequired
}

