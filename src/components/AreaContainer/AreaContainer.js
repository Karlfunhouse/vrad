import React from 'react'
import PropTypes from 'prop-types'
import './AreaContainer.css'
import Area from '../Area/Area'

const AreaContainer = (props) => {
  const areasInfo = props.areas.map(area => {
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

}
