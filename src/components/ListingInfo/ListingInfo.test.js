import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import ListingInfo from './ListingInfo'
import { BrowserRouter } from "react-router-dom";

const addFavoriteListing = jest.fn(() => true)

let listingInfoComponent
let listing
beforeEach(() => {
  listing = {
    listing_id: 1,
    area_id: 1,
    name: "name",
    address: {
      street: "street",
      zip: 11111,
    },
    details: {
      neighborhood_id: 1,
      superhost: true,
      seller_source: "seller_source",
      beds: 1,
      baths: 1,
      cost_per_night: 1,
      features: ["feature1", "feature2"],
    },
    dev_id: "dev_id",
    area: "area",
    db_connect: 1,
    favorite: false,
    img: ["img1", "img2", "img3"]
  }
  listingInfoComponent = render(
    <BrowserRouter>
      <ListingInfo listing={listing} addFavoriteListing={addFavoriteListing} />
    </BrowserRouter>
  )
})

afterEach(cleanup)

test('<ListingInfo/> component successfully renders', () => {
  const { getByText } = listingInfoComponent
  expect(getByText(listing.name)).toBeInTheDocument()
})

test('that listing is added to favorites when clicking favorite button', () => {
  const { getByText } = listingInfoComponent
  expect(getByText('\u2764 Add to Favorites')).toBeInTheDocument()
  fireEvent.click(getByText('\u2764 Add to Favorites'))
  listing.favorite = addFavoriteListing()
  cleanup()
  render(
    <BrowserRouter>
      <ListingInfo listing={listing} addFavoriteListing={addFavoriteListing} />
    </BrowserRouter>
  )
  expect(getByText('\u2764 Remove from Favorites')).toBeInTheDocument()
  fireEvent.click(getByText('\u2764 Remove from Favorites'))
  listing.favorite = !addFavoriteListing()
  cleanup()
  render(
    <BrowserRouter>
      <ListingInfo listing={listing} addFavoriteListing={addFavoriteListing} />
    </BrowserRouter>
  )
  expect(getByText('\u2764 Add to Favorites')).toBeInTheDocument()
})
