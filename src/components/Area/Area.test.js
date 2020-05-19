import React from "react"
import { render, cleanup, fireEvent } from "@testing-library/react"
import Area from "./Area"
import { BrowserRouter } from "react-router-dom"

const displayListings = jest.fn()

let areaComponent
let area
beforeEach(() => {
  area = {
    about: "about",
    area: "area",
    id: 1,
    listings: ["/1", "/2"],
    location: "location",
    name: "name",
    quick_search: "1",
    region_code: 1,
  }
  areaComponent = render(
    <BrowserRouter>
      <Area area={area} key={area.id} displayListings={displayListings} />
    </BrowserRouter>
  )
})

afterEach(cleanup)

test("component successfully renders", () => {
  const { getByText } = areaComponent
  expect(getByText("about")).toBeInTheDocument()
})

test("that displayListings has been clicked", () => {
  const { getByText } = areaComponent
  fireEvent.click(getByText("See Listings"))
  fireEvent.click(getByText("See Listings"))
  expect(displayListings).toHaveBeenCalledTimes(2)
})

test("that displayListings has been called with listings", () => {
  const { getByText } = areaComponent
  fireEvent.click(getByText("See Listings"))
  expect(displayListings).toHaveBeenCalledWith(area.listings)
})

test("that the url pathway changes when user clicks button", () => {
  expect(location.pathname).toBe(`/areas/${area.area}/listings`)
})