import React from 'react';
import { render, cleanup, fireEvent } from "@testing-library/react";
import Listing from './Listing';
import { BrowserRouter } from "react-router-dom";

const listing = {
  listing_id: 3,
  area_id: 590,
  name: "Hip RiNo Party Spot",
  address: {
    street: "2250 Lawrence St",
    zip: 80205,
  },
  details: {
    neighborhood_id: 5124122,
    superhost: true,
    seller_source: "91jss1",
    beds: 3,
    baths: 2.5,
    cost_per_night: 420,
    features: ["hot tub", "espresso machine"],
  },
  dev_id: "u4gh2j",
  area: "rino",
  db_connect: 834470,
  favorite: false,
  img: ["1", "2", "3"]
};

const displayListing = jest.fn();

test('that the listing is rendering', () => {
  const { getByText } = render(
    <BrowserRouter>
      <Listing listing={listing} displayListing={displayListing} />
    </BrowserRouter>
  )
  fireEvent.click(getByText("See Details"));
  expect(displayListing).toHaveBeenCalledTimes(1);
})

test("that the listing is rendering", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Listing listing={listing} displayListing={displayListing} />
    </BrowserRouter>
  );
  fireEvent.click(getByText("See Details"));
  expect(displayListing).toHaveBeenCalledWith(listing);
});

test('that the url pathway changes when user clicks button', () => {
  expect(location.pathname).toBe('/areas/rino/listings/3')
})