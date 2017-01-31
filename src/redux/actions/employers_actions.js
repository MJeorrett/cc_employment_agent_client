import fetch from 'isomorphic-fetch'

import * as types from './types'

export function fetchEmployersStarted() {
  return {
    type: types.FETCH_EMPLOYERS_STARTED
  }
}

export function fetchEmployersSuccess( responseJson ) {
  return {
    type: types.FETCH_EMPLOYERS_SUCCESS,
    payload: responseJson
  }
}

export function fetchEmployersFailed( error ) {
  return {
    type: types.FETCH_EMPLOYERS_FAILED,
    payload: error
  }
}

export function fetchEmployers() {
  return function ( dispatch ) {
    dispatch(fetchEmployersStarted() )
    const url = 'http://localhost:5000/api/employers'
    return fetch( url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      }
    })
    .then( res => res.json() )
    .then( json => dispatch( fetchEmployersSuccess(json) ) )
  }
}
