import React, { Component } from "react";
import PropTypes from "prop-types";
import "./UserInfo.css";

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
          <button 
            className='favorite-btn'
          >
            {"\u2764"} Favorite Listings: {favoriteListings.length}
          </button>
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
 