import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'
import './App.css'

import UserInfo from '../UserInfo/UserInfo'
import Covid19 from '../Covid19/Covid19'
import Header from '../Header/Header'
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'
import ListingContainer from '../ListingContainer/ListingContainer'
import ListingInfo from '../ListingInfo/ListingInfo'
import imageData from '../../imageData'

export default class App extends Component {
                 constructor() {
                   super();
                   this.state = {
                     isLoggedIn: false,
                     username: "",
                     email: "",
                     usage: "",
                     favoriteListings: [],
                     areas: [],
                     listings: [],
                     listing: null,
                   };
                 }

                 componentDidMount = async () => {
                   try {
                     const url = "https://vrad-api.herokuapp.com";
                     let areasArray = [];
                     const response = await fetch(url + "/api/v1/areas");
                     const areas = await response.json();
                     areas.areas.forEach(async (area) => {
                       const response2 = await fetch(url + area.details);
                       const areaDetails = await response2.json();
                       const areaObject = {
                         ...areaDetails,
                         area: area.area,
                       };
                       areasArray.push(areaObject);
                     });
                     this.setState({ areas: areasArray });
                   } catch (e) {
                     console.log(e);
                   }
                 };

                //  displayListings = async (listings) => {
                //   try {
                //     const url = "https://vrad-api.herokuapp.com";
                //     let listingsArray = [];
                //     await listings.forEach(async (listing) => {
                //       const images = Object.entries(imageData).find((item) => {
                //         if (item[0] === listing.split("").splice(17).join("")) {
                //           return item[1];
                //         }
                //       });
                //       const response = await fetch(url + listing)
                //       const listingDetails = await response.json();
                //       const listingObject = {
                //             favorite: false,
                //             ...listingDetails,
                //             img: images[1],
                //           }
                //       listingsArray.push(listingObject)
                //     })
                //     this.setState({ listings: listingsArray })
                //   } catch (e) {
                //     console.log(e)
                //   } 
                // };

                  displayListings = (listings) => {
                    const url = "https://vrad-api.herokuapp.com";
                    const listingsPromises = listings.map((listing) => {
                      const images = Object.entries(imageData).find((item) => {
                        if (item[0] === listing.split("").splice(17).join("")) {
                          return item[1];
                        }
                      });
                      return fetch(url + listing)
                        .then((response) => response.json())
                        .then((listing) => {
                          return {
                            favorite: false,
                            ...listing,
                            img: images[1],
                          };
                        });
                    });
                    Promise.all(listingsPromises)
                      .then((resolvedListings) => {
                        this.setState({ listings: resolvedListings });
                      })
                      .catch((err) => console.error(err));
                  };

                 displayListing = (listing) => {
                   this.setState({ listing: listing });
                 };

                 displayFavorites = (favoriteListings) => {};

                 checkLogin = (userInfo) => {
                   this.setState({
                     username: userInfo.username,
                     email: userInfo.email,
                     usage: userInfo.usage,
                     isLoggedIn: true,
                   });
                 };

                 logout = () => {
                   this.setState({
                     username: "",
                     email: "",
                     usage: "",
                     favoriteListings: [],
                     isLoggedIn: false,
                   });
                 };

                 addFavoriteListing = (listing) => {
                   const newFavoriteListings = this.state.favoriteListings.slice();
                   let foundListing = newFavoriteListings.find(
                     (fave) => fave.listing_id === listing.listing_id
                   );
                   if (!foundListing) {
                     listing.favorite = true;
                     newFavoriteListings.push(listing);
                   } else {
                     listing.favorite = false;
                     let index = newFavoriteListings.findIndex(
                       (i) => i.listing_id === listing.listing_id
                     );
                     newFavoriteListings.splice(index, 1);
                   }
                   this.setState({ favoriteListings: newFavoriteListings });
                 };

                 render() {
                   const {
                     isLoggedIn,
                     listings,
                     listing,
                     username,
                     usage,
                     favoriteListings,
                     areas,
                   } = this.state;

                   return (
                     <div>
                       <Covid19 />
                       <Header />
                       {isLoggedIn && (
                         <UserInfo
                           logout={this.logout}
                           username={username}
                           usage={usage}
                           favoriteListings={favoriteListings}
                         />
                       )}

                       {!isLoggedIn ? (
                         <Redirect to="/" />
                       ) : (
                         <Redirect to="/areas" />
                       )}

                       <Route
                         path="/"
                         exact
                         render={() => {
                           return <Login checkLogin={this.checkLogin} />;
                         }}
                       />
                       <Route
                         path="/areas"
                         exact
                         render={() => {
                           return (
                             <AreaContainer
                               areas={areas}
                               displayListings={this.displayListings}
                             />
                           );
                         }}
                       />
                       <Route
                         path="/areas/:area/listings"
                         exact
                         render={() => {
                           return (
                             <ListingContainer
                               listings={listings}
                               displayListing={this.displayListing}
                             />
                           );
                         }}
                       />
                       <Route
                         path="/favorites"
                         exact
                         render={() => {
                           return (
                             <ListingContainer
                               listings={favoriteListings}
                               displayListing={this.displayListing}
                             />
                           );
                         }}
                       />
                       <Route
                         path="/areas/:listing_id/listings/:listing_id"
                         exact
                         render={() => {
                           return (
                             <ListingInfo
                               listing={listing}
                               addFavoriteListing={this.addFavoriteListing}
                             />
                           );
                         }}
                       />
                     </div>
                   );
                 }
               }
