import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import ListingInfo from './ListingInfo'
import { BrowserRouter } from 'react-router-dom'

describe('ListingInfo Component', () => {
  const addFavoriteListing = jest.fn(() => true)
  let listing
  
  beforeEach(() => {
    listing = {
      listing_id: 1,
      area_id: 1,
      name: 'name',
      address: {
        street: 'street',
        zip: 11111,
      },
      details: {
        neighborhood_id: 1,
        superhost: true,
        seller_source: 'seller_source',
        beds: 1,
        baths: 1,
        cost_per_night: 1,
        features: ['feature1', 'feature2'],
      },
      dev_id: 'dev_id',
      area: 'area',
      db_connect: 1,
      favorite: false,
      img: ['img1', 'img2', 'img3']
    }

   
  })
  
  // afterEach(cleanup)
  
  test('<ListingInfo/> component successfully renders', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ListingInfo 
        listing={listing} 
        addFavoriteListing={addFavoriteListing}/>
      </BrowserRouter>
    )
    expect(getByText(listing.name)).toBeInTheDocument()
  })
  
  test('that listing is added/removed from favorites when clicking favorite button', () => {
    const { getByText, debug } = render(
      <BrowserRouter>
        <ListingInfo 
        listing={listing} 
        addFavoriteListing={addFavoriteListing}/>
      </BrowserRouter>
    )
    expect(getByText('\u2764 Add to Favorites')).toBeInTheDocument()
    fireEvent.click(getByText('\u2764 Add to Favorites'))
    listing.favorite = addFavoriteListing()
  })

  test('that the listing is removed from favorites when clicking favorite button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ListingInfo
          listing={listing}
          addFavoriteListing={addFavoriteListing}
        />
      </BrowserRouter>
    )
    fireEvent.click(getByText("\u2764 Add to Favorites"));
    expect(getByText("\u2764 Remove from Favorites")).toBeInTheDocument();
  })
  
  test('that the url pathway changes when user clicks Back To Listing button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ListingInfo 
        listing={listing} 
        addFavoriteListing={addFavoriteListing}/>
      </BrowserRouter>
    )
    fireEvent.click(getByText('Back To Listings'))
    expect(location.pathname).toBe(`/areas/${listing.area}/listings`)
  })
  
  test('that the url pathway changes when user clicks Back To Areas button', () => {
    const { getByText } = render(
      <BrowserRouter>
        <ListingInfo 
        listing={listing} 
        addFavoriteListing={addFavoriteListing}/>
      </BrowserRouter>
    )
    fireEvent.click(getByText('Back To Areas'))
    expect(location.pathname).toBe('/areas')
  })
})


