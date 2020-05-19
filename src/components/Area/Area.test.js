import React from "react";
import { render, cleanup, fireEvent } from "@testing-library/react";
import Area from "./Area";
import { BrowserRouter } from "react-router-dom";

const area = {
  about: "RiNo is a burgeoning area with new bars",
  area: "RiNo",
  id: 590,
  listings: ["/api/v1/listings/3", "/api/v1/listings/44"],
  location: "North of Downtown Denver",
  name: "River North",
  quick_search: "o5kod9f5cqo0",
  region_code: 6356834,
};
const displayListings = jest.fn();

afterEach(cleanup);

test("component successfully renders", () => {
  const { getByText } = render(
    <BrowserRouter>
      <Area area={area} key={area.id} displayListings={displayListings} />
    </BrowserRouter>
  );
  expect(getByText("RiNo")).toBeInTheDocument();
});

test("that displayListings has been clicked", () => {
  const { getByText, debug } = render(
    <BrowserRouter>
      <Area area={area} key={area.id} displayListings={displayListings} />
    </BrowserRouter>
  );
  fireEvent.click(getByText("See Listings"));
  fireEvent.click(getByText("See Listings"));
  expect(displayListings).toHaveBeenCalledTimes(2);
});

test("that displayListings has been called with listings", () => {
  const { getByText, debug } = render(
    <BrowserRouter>
      <Area area={area} key={area.id} displayListings={displayListings} />
    </BrowserRouter>
  );
  fireEvent.click(getByText("See Listings"));
  expect(displayListings).toHaveBeenCalledWith(area.listings);
});
