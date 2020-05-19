import React from 'react'
import { render, cleanup } from '@testing-library/react'
import AreaContainer from './AreaContainer'
import { BrowserRouter } from "react-router-dom"

describe('AreaContainer Component', () => {
  let areaContainerComponent
  let areas
  let displayListings = jest.fn()
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
    areaContainerComponent = render(
        <BrowserRouter>
          <AreaContainer
            areas={areas}
            displayListings={displayListings}
          />
        </BrowserRouter>
        )
  })

  test('AreaContainer component renders correctly', () => {
    const { getByText } = areaContainerComponent
    expect(getByText("about2")).toBeInTheDocument()
  }) 
  
})