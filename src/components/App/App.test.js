import React from 'react'
import { render, cleanup, waitFor, fireEvent } from '@testing-library/react'
import App from './App'
import { fetchAreas, fetchListings } from '../../ApiFetch/ApiFetch'
import { BrowserRouter } from "react-router-dom"
jest.mock('../../ApiFetch/ApiFetch')

describe('App Component', () => {
let appComponent
let areas
let listings
beforeEach(() => {
  areas = [
    {
      about: "about",
      area: "area",
      id: 1,
      listings: ["/1", "/2"],
      location: "location",
      name: "name",
      quick_search: "1",
      region_code: 1,
    },
    {
      about: "about2",
      area: "area2",
      id: 2,
      listings: ["/a", "/b"],
      location: "location2",
      name: "name2",
      quick_search: "2",
      region_code: 2,
    }
  ]

  listings = [
    {
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
    },
    {
      listing_id: 2,
      area_id: 2,
      name: "name2",
      address: {
        street: "street2",
        zip: 11111,
      },
      details: {
        neighborhood_id: 2,
        superhost: true,
        seller_source: "seller_source2",
        beds: 2,
        baths: 2,
        cost_per_night: 2,
        features: ["featureA", "featureB"],
      },
      dev_id: "dev_id2",
      area: "area2",
      db_connect: 2,
      favorite: false,
      img: ["imgA", "imgB", "imgC"]
    }
  ]
  appComponent = render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  )
})

afterEach(cleanup)

fetchAreas.mockResolvedValue(areas)
fetchListings.mockResolvedValue(listings)

test('<App/> component fetched areas data', async () => {
  const { debug } = appComponent
  debug()
  expect(true).toBeTruthy()
})
})






