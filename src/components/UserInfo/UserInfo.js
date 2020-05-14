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
      <div>
        <p className="user-info-text">
          Welcome {username}, we hope you find something for your {usage} needs. You have {favoriteListings.length} favorite listings.
        </p>
        
            <button onClick={logout}>Logout</button>
      </div>
    )
}

export default UserInfo

UserInfo.propTypes = {}
