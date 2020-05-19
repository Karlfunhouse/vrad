import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Login from './Login'

const handleSubmit = jest.fn()

let loginComponent
beforeEach(() => {
  loginComponent = render(<Login/>)
})

afterEach(cleanup)

test('that LOGIN button is disabled if any input is empty', () => {
  const { getByLabelText, getByText } = loginComponent
  getByLabelText('Username:').value = ''
  expect(getByText('LOGIN')).toHaveAttribute('disabled');
})

test('that LOGIN button is enabled if all inputs', () => {
  const { getByLabelText, getByText, debug } = loginComponent
  fireEvent.change(getByLabelText('Username:'), {target: {value: 'user'}})
  fireEvent.change(getByLabelText('Email:'), {target: {value: 'email'}})
  handleSubmit()
  expect(getByText('LOGIN')).toHaveAttribute('disabled');
  debug()
})

test('that username value is changed', () => {
  const { getByLabelText } = loginComponent
  getByLabelText('Username:').value = 'user'
  fireEvent.change(getByLabelText('Username:'))
  expect(getByLabelText('Username:').value).toBe('user')
})

test('that email value is changed', () => {
  const { getByLabelText } = loginComponent
  getByLabelText('Email:').value = 'email'
  fireEvent.change(getByLabelText('Email:'))
  expect(getByLabelText('Email:').value).toBe('email')
})

test('that handle submit is called', () => {
  const { getByText } = loginComponent
  fireEvent.click(getByText('LOGIN'))
  handleSubmit({
    email: 'email',
    username: 'user',
    usage: 'business'
  })
  expect(handleSubmit).toHaveBeenCalledWith({
    email: 'email',
    username: 'user',
    usage: 'business'
  })
})

