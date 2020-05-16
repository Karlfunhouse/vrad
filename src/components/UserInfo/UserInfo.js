import React, { Component } from "react";
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
              className='favorite-btn' disabled={favoriteListings.length>0 ? null : "disabled"}
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

UserInfo.propTypes = {}
 