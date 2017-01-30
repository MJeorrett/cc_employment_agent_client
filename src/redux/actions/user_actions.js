import { LOG_IN_USER } from './types'

export function logInUser( email, password ) {
  return {
    type: LOG_IN_USER,
    payload: {
      email,
      password
    }
  }
}
