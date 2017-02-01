import fetch from 'isomorphic-fetch'

import * as types from './types'
import { API_URL } from '../../config'

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

export function reorderEmployer( fromIndex, toIndex ) {
  return {
    type: types.REORDER_EMPLOYER,
    payload: {
      fromIndex: fromIndex,
      toIndex: toIndex
    }
  }
}

export function selectEmployer( id ) {
  return {
    type: types.EMPLOYER_SELECTED,
    payload: id
  }
}

export function fetchEmployers() {
  return function ( dispatch ) {
    dispatch(fetchEmployersStarted() )
    const url = API_URL + 'api/employers'
    return fetch( url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then( res => res.json() )
    .then( json => dispatch( fetchEmployersSuccess(json) ) )
  }
}
