import React from "react";
import { render, cleanup } from "@testing-library/react";
import ListingContainer from "./ListingContainer";
import { BrowserRouter } from "react-router-dom";

describe("ListingContainer Component", () => {
  let listingContainerComponent;
  let listings;
  let displayListing = jest.fn();
  beforeEach(() => {
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
        img: ["img1", "img2", "img3"],
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
        img: ["imgA", "imgB", "imgC"],
      },
    ];
    listingContainerComponent = render(
      <BrowserRouter>
        <ListingContainer listings={listings} displayListing={displayListing} />
      </BrowserRouter>
    );
  });

  test("ListingContainer component renders correctly", () => {
    const { getByText } = listingContainerComponent;
    expect(getByText("name2")).toBeInTheDocument();
    console.log(location.pathname)
  });
});
