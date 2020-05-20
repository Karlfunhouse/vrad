import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Covid19 from './Covid19'

describe('Covid19 Component', () => {
  afterEach(cleanup)

  test('<Covid19/> component successfully renders', () => {
    const { getByText } = render(<Covid19 />)
    expect(getByText('Get the latest on our COVID-19 response and cancellation policies.')).toBeInTheDocument()
  })

  test('<Covid19/> state changes and banner dissapear after x click', () => {
    const { getByText, getByTestId } = render(<Covid19 />)
    expect(getByTestId('covid19-container')).toBeInTheDocument()
    fireEvent.click(getByText('X'))
    expect(getByTestId('hide')).toBeInTheDocument()
  })
})
