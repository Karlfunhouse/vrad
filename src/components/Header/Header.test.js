import React from 'react'
import { render } from '@testing-library/react'
import Header from './Header'

describe('Header Component', () => {
  test('<Header/> component successfully renders', () => {
    const { getByText } = render(<Header />)
    expect(getByText('Vacation Rentals Around Denver')).toBeInTheDocument()
  })
})
