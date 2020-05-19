import React from 'react'
import { render, cleanup, fireEvent } from '@testing-library/react'
import Login from './Login'

describe('Login Component', () => {
  const checkLogin = jest.fn()
  let loginComponent
  beforeEach(() => {
    loginComponent = render(<Login checkLogin={checkLogin}/>)
  })
  
  afterEach(cleanup)
  
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
  
  test('that LOGIN button is disabled by default or if any input is empty', () => {
    const { getByLabelText, getByText } = loginComponent
    expect(getByText('LOGIN')).toHaveAttribute('disabled')
    fireEvent.change(getByLabelText('Username:'), {target: {value: 'user'}})
    fireEvent.change(getByLabelText('Email:'), {target: {value: ''}})
    
    expect(getByText('LOGIN')).toHaveAttribute('disabled');
  })
  
  test('that LOGIN button is enabled if all required inputs are filled', () => {
    const { getByLabelText, getByText } = loginComponent
    fireEvent.change(getByLabelText('Username:'), {target: {value: 'user'}})
    fireEvent.change(getByLabelText('Email:'), {target: {value: 'email'}})
    expect(getByText('LOGIN')).not.toHaveAttribute('disabled');
  })
  
  test('that handleSubmit is invoked with correct arguments', () => {
    const { getByLabelText, getByText, debug } = loginComponent
    fireEvent.change(getByLabelText('Username:'), {target: {value: 'user'}})
    fireEvent.change(getByLabelText('Email:'), {target: {value: 'email'}})
    fireEvent.click(getByText('LOGIN'))
    expect(checkLogin).toHaveBeenCalledTimes(1)
  })
})

