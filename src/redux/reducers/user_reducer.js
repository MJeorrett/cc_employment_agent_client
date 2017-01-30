import { SET_LOGGED_IN_USER } from '../actions/types'

const defaultState = {
  logged_in_user: undefined
}

const user_reducer = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case SET_LOGGED_IN_USER:
      return {
        logged_in_user: action.user
      }
    default:
      return state
  }
}

export default user_reducer
