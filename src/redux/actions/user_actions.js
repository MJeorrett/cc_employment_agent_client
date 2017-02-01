import fetch from 'isomorphic-fetch'

import * as types from './types'
import { API_URL } from '../../config'

export function logInUserStarted() {
  return {
    type: types.LOG_IN_USER_STARTED
  }
}

export function logInUserSuccess( responseJson ) {
  return {
    type: types.LOG_IN_USER_SUCCESS,
    payload: responseJson
  }
}

export function logInUserFailed( error ) {
  return {
    type: types.LOG_IN_USER_FAILED,
    payload: error
  }
}

export function logOutUserSuccess() {
  return {
    type: types.LOG_OUT_USER_SUCCESS
  }
}

function handleErrors(res) {
  const json = res.json()
  if (!res.ok) {
    return json.then( err => { throw err.error } )
  }
  else {
    return json
  }
}

export function logInUser( email, password ) {
  return function ( dispatch ) {
    dispatch( logInUserStarted() )
    const url = API_URL + 'users/sign_in.json'
    const reqBody = {
      user: {
        email,
        password
      }
    }
    return fetch( url, {
      method: 'POST',
      body: JSON.stringify( reqBody ),
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then( res => handleErrors(res) )
    .then(
      json => dispatch( logInUserSuccess(json) ),
      err => dispatch( logInUserFailed(err) )
    )
  }
}

function fetchCurrentUser( dispatch ) {
  const url = API_URL + 'users'
  return fetch( url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'include'
  })
  .then( res => res.json() )
  .then( json => dispatch( logInUserSuccess(json) ) )
}

export function getLoggedInUser() {
  return function ( dispatch ) {
    dispatch( logInUserStarted() )
    const url = API_URL + 'authtest'
    return fetch( url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then( res => res.json() )
    .then( json => {
      if ( json ) fetchCurrentUser( dispatch )
    })
  }
}

export function logOutUser() {
  return function ( dispatch ) {
    const url = API_URL + 'users/sign_out.json'
    return fetch( url, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then( () => dispatch( logOutUserSuccess() ) )
  }
}
