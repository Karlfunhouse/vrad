import React from "react";
import PropTypes from "prop-types";
import "./UserInfo.css";
import { Link } from "react-router-dom"

const UserInfo = (props) => {
    const { 
      username, 
      usage,
      favoriteListings, 
      logout 
    } = props
    
    return (
      <div className='user-container'>
        <div className='user-wrapper'>
          <p className="user-message">
            Welcome {username}, we hope you find something for your 
            <span className='usage'> {usage}</span> needs. 
          </p>
          <div className='btn-wrapper'>
          <Link to="/favorites">
            <button 
              className={favoriteListings.length>0 ? 'favorite-btn' : 'no-favorite-btn'}
              disabled={favoriteListings.length>0 ? null : "disabled"}
              data-testid="Favorite Button"
            >
              {"\u2764"} {!favoriteListings.length? "No Favorite Listings" : `Favorite Listings: ${favoriteListings.length}`}
            </button>
          </Link>
          <button 
            className='logout-btn'
            onClick={logout}
          >
            Logout
          </button>
          </div>
        </div>
      </div>
    )
}

export default UserInfo

UserInfo.propTypes = {
    logout: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    usage: PropTypes.string.isRequired,
    favoriteListings: PropTypes.arrayOf(PropTypes.shape({
      listing_id: PropTypes.number.isRequired,
      area_id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        zip: PropTypes.number.isRequired,
      }),
      details: PropTypes.shape({
        neighborhood_id: PropTypes.number.isRequired,
        seller_source: PropTypes.string.isRequired,
        superhost: PropTypes.bool.isRequired,
        beds: PropTypes.number.isRequired,
        baths: PropTypes.number.isRequired,
        cost_per_night: PropTypes.number.isRequired,
        features: PropTypes.arrayOf(PropTypes.string).isRequired,
      }),
      dev_id: PropTypes.string.isRequired,
      area: PropTypes.string.isRequired,
      favorite: PropTypes.bool.isRequired,
      db_connect: PropTypes.number,
    }).isRequired,)
}
 