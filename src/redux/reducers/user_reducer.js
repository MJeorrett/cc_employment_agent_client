import { LOG_IN_USER } from '../actions/types'

const defaultState = {
  logged_in_user: null
}

const user_reducer = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case LOG_IN_USER:
      return {
        logged_in_user: action.payload.email
      }
    default:
      return state
  }
}

export default user_reducer
