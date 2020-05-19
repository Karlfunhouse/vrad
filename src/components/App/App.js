import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import './App.css'
import UserInfo from '../UserInfo/UserInfo'
import Covid19 from '../Covid19/Covid19'
import Header from '../Header/Header'
import Login from '../Login/Login'
import AreaContainer from '../AreaContainer/AreaContainer'
import ListingContainer from '../ListingContainer/ListingContainer'
import ListingInfo from '../ListingInfo/ListingInfo'
import { fetchAreas, fetchListings } from '../../ApiFetch/ApiFetch'

export default class App extends Component {
                 constructor() {
                   super();
                   this.state = {
                     isLoggedIn: false,
                     username: '',
                     email: '',
                     usage: '',
                     favoriteListings: [],
                     areas: [],
                     listings: [],
                     listing: null,
                   };
                 }

                 componentDidMount = async () => {
                   this.setState({ areas: await fetchAreas() })
                 }

                  displayListings = async (listings) => {
                    this.setState({ listings: await fetchListings(listings) })
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
                     username: '',
                     email: '',
                     usage: '',
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
                         <Redirect to='/' />
                       ) : (
                         <Redirect to='/areas' />
                       )}

                       <Route
                         path='/'
                         exact
                         render={() => {
                           return <Login checkLogin={this.checkLogin} />;
                         }}
                       />
                       <Route
                         path='/areas'
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
                         path='/areas/:area/listings'
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
                         path='/favorites'
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
                         path='/areas/:listing_id/listings/:listing_id'
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
