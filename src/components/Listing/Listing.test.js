import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Listing from './Listing'
import { BrowserRouter } from 'react-router-dom'

describe('Listing Component', () => {
  const displayListing = jest.fn()
  let listingComponent
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
    
    listingComponent = render(
      <BrowserRouter>
        <Listing listing={listing} displayListing={displayListing} />
      </BrowserRouter>
    )
  })
  
  afterEach(cleanup)
  
  test('<Listing/> component successfully renders', () => {
    const { getByText } = listingComponent
    expect(getByText(listing.name)).toBeInTheDocument()
  })
  
  test('that displayListings has been clicked', () => {
    const { getByText } = listingComponent
    fireEvent.click(getByText('See Details'))
    expect(displayListing).toHaveBeenCalledTimes(1)
  })
  
  test('that displayListing has been called with listing', () => {
    const { getByText } = listingComponent
    fireEvent.click(getByText('See Details'))
    expect(displayListing).toHaveBeenCalledWith(listing)
  })
  
  test('that the url pathway changes when user clicks button', () => {
    expect(location.pathname).toBe(`/areas/${listing.area}/listings/${listing.listing_id}`)
  })
})


