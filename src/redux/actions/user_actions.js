import fetch from 'isomorphic-fetch'

import * as types from './types'

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

// function handleErrors(res) {
//     if (!res.ok) {
//         throw Error(res.json().then( json => json.error ));
//     }
//     return res;
// }

export function logInUser( email, password ) {
  return function ( dispatch ) {
    dispatch( logInUserStarted() )
    const url = 'http://localhost:5000/users/sign_in.json'
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
        'Content-Type': 'application/json',
        'Access-Control-Allow-Credentials': 'true'
      }
    })
    // .then( res => handleErrors(res) )
    .then( res => res.json() )
    .then( json => console.log("json:", json) )
    // .catch( err => console.log("error:", err.message) )
  }
}
