import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Login from './Login'

const handleSubmit = jest.fn()

let login
beforeEach(() => {
  login = render(<Login/>)
})

afterEach(cleanup)

test('that LOGIN button is disabled if any input is empty', () => {
  const { getByLabelText, getByText } = login
  getByLabelText('Username:').value = ''
  expect(getByText('LOGIN')).toHaveAttribute('disabled');
})

test('that LOGIN button is enabled if all inputs', () => {
  const { getByLabelText, getByText, debug } = login
  getByLabelText('Username:').value = 'user'
  fireEvent.change(getByLabelText('Username:'))
  getByLabelText('Email:').value = 'email'
  fireEvent.change(getByLabelText('Email:'))
  getByLabelText('Business:').value = 'business'
  fireEvent.click(getByLabelText('Business:'))
  // expect(getByText('LOGIN')).toHaveAttribute('disabled');
  // debug()
})

test('that username value is changed', () => {
  const { getByLabelText } = login
  getByLabelText('Username:').value = 'user'
  fireEvent.change(getByLabelText('Username:'))
  expect(getByLabelText('Username:').value).toBe('user')
})

test('that email value is changed', () => {
  const { getByLabelText } = login
  getByLabelText('Email:').value = 'email'
  fireEvent.change(getByLabelText('Email:'))
  expect(getByLabelText('Email:').value).toBe('email')
})

test('that handle submit is called', () => {
  const { getByText } = login
  fireEvent.click(getByText('LOGIN'))
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'email',
    username: 'user',
    usage: 'business'
  })
})
