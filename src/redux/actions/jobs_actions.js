import fetch from 'isomorphic-fetch'

import * as types from './types'
import { API_URL } from '../../config'

export function fetchJobsStarted() {
  return {
    type: types.FETCH_JOBS_STARTED
  }
}

export function fetchJobsSuccess( responseJson ) {
  return {
    type: types.FETCH_JOBS_SUCCESS,
    payload: responseJson
  }
}

export function fetchJobsFailed( error ) {
  return {
    type: types.FETCH_JOBS_FAILED,
    payload: error
  }
}

export function fetchJobs() {
  return function ( dispatch ) {
    const url = API_URL + 'api/jobs'
    return fetch( url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then( res => res.json() )
    .then( json => dispatch( fetchJobsSuccess(json) ) ) 
  }
}