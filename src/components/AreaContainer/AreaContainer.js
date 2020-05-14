import React from 'react'
import PropTypes from 'prop-types'
import './AreaContainer.css'
import Area from '../Area/Area'

const AreaContainer = (props) => {
  console.log(props)
  const areasInfo = props.areas.map(area => {
    return <Area area={area} displayListings={props.displayListings}/>
    })

    return (
        <div>AreaContainer
            {areasInfo}
        </div>
    )
}

export default AreaContainer

AreaContainer.propTypes = {

}
