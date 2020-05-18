import React from 'react'
import PropTypes from 'prop-types'
import './ListingContainer.css'
import Listing from '../Listing/Listing'
import { Link } from "react-router-dom"

const ListingContainer = (props) => {
  const allListings = props.listings.map(listing => {
    return <Listing 
        listing={listing} 
        key={listing.listing_id}
        displayListing={props.displayListing}
      />
  })
    return (
      <section>
        <nav className='listing-container-nav'>
          <Link to="/areas">
              <button className="back-areas-btn">Back To Areas</button>
          </Link>
        </nav>
        <div className="listing-container">
          {allListings}
        </div>
      </section>
    );
}

export default ListingContainer

ListingContainer.propTypes = {
  listings: PropTypes.arrayOf(PropTypes.shape({
    address: PropTypes.shape({
      street: PropTypes.string.isRequired,
      zip: PropTypes.number.isRequired,
    }),
    area: PropTypes.string.isRequired,
    area_id: PropTypes.number.isRequired,
    db_connect: PropTypes.number,
    details: PropTypes.shape({
      neighborhood_id: PropTypes.number.isRequired,
      seller_source: PropTypes.string.isRequired,
      superhost: PropTypes.bool.isRequired,
      beds: PropTypes.number.isRequired,
      baths: PropTypes.number.isRequired,
      cost_per_night: PropTypes.number.isRequired,
      features: PropTypes.arrayOf(PropTypes.string).isRequired,
    }),
    listing_id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  displayListing: PropTypes.func.isRequired
}



// componentDidMount = async () => {
//   try {
//     const res = await fetch("http://localhost:3001/api/v1/ideas");
//     console.log(res);
//     const ideas = await res.json();
//     this.setState({
//       ideas: [...ideas, ...this.state.ideas],
//     });
//   } catch (e) {
//     console.log(e);
//   }
// };

// componentDidMount = async () => {
//   try {
//     const url = "https://vrad-api.herokuapp.com";
//     let areasArray = [];
//     const response = await fetch(url + "/api/v1/areas");
//     const areas = await response.json();
//     areas.areas.map(async (area) => {
//       const response2 = await fetch(url + area.details);
//       const areaDetails = await response2.json();
//       const areaObject = {
//         ...areaDetails,
//         area: area.area,
//       };
//       areasArray.push(areaObject);
//     });
//     this.setState({ areas: areasArray });
//   } catch (e) {
//     console.log(e);
//   }
// };