import { SET_LOGGED_IN_USER } from './types'

export function setLoggedInUser( user ) {
  return {
    type: SET_LOGGED_IN_USER,
    user
  }
}
