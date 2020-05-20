import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import UserInfo from './UserInfo'
import { BrowserRouter } from 'react-router-dom'

describe('UserInfo component', () => {
  let username
  let usage
  let favoriteListings
  const logout = jest.fn()

  beforeEach(() => {
    username = 'Robbie'
    usage = 'Party'
    favoriteListings = [{
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
      favorite: true,
      img: ['img1', 'img2', 'img3']
    }]

    
  
  })

   afterEach(cleanup)
  
   test('component renders without crashing', () => {
     const { getByText } = render(
         <BrowserRouter>
           <UserInfo
             username={username}
             usage={usage}
             favoriteListings={favoriteListings}
             logout={logout}
           />
         </BrowserRouter>
       );
     expect(getByText('Logout')).toBeInTheDocument()
   })

   test('When clicking on Logout button it fires logout method', () => {
     const { getByText } = render(
         <BrowserRouter>
           <UserInfo
             username={username}
             usage={usage}
             favoriteListings={favoriteListings}
             logout={logout}
           />
         </BrowserRouter>
       );
    fireEvent.click(getByText('Logout'))
    expect(logout).toHaveBeenCalledTimes(1)
   })

   test('When user logs out, path changes to /', () => {

      const { getByText } = render(
         <BrowserRouter>
           <UserInfo
             username={username}
             usage={usage}
             favoriteListings={favoriteListings}
             logout={logout}
           />
         </BrowserRouter>
       );
      fireEvent.click(getByText('Logout'))
      expect(location.pathname).toBe('/')
   })

   test('When user clicks on Favorite Listings button, path changes to /favorites', () => {
        const { getByTestId } = render(
         <BrowserRouter>
           <UserInfo
             username={username}
             usage={usage}
             favoriteListings={favoriteListings}
             logout={logout}
           />
         </BrowserRouter>
       );
     fireEvent.click(getByTestId('Favorite Button'))
     expect(location.pathname).toBe('/favorites')
   })

   test('When user has no favorites saved, the Favorite button is disabled', () => {
     cleanup()
     const { getByTestId } = render(
     <BrowserRouter>
       <UserInfo
         username={username}
         usage={usage}
         favoriteListings={[]}
         logout={logout}
         />
     </BrowserRouter>)
     expect(getByTestId('Favorite Button')).toHaveAttribute('disabled')
   })
})