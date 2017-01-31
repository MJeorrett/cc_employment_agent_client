import * as types from '../actions/types'

const defaultState = {
  logged_in_user: null,
  log_in_in_progress: false,
  log_in_error: ""
}

const user_reducer = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case types.LOG_IN_USER_STARTED:
      return {
        logged_in_user: null,
        log_in_in_progress: true,
        log_in_error: ""
      }
    case types.LOG_IN_USER_SUCCESS:
      return {
        logged_in_user: action.payload,
        log_in_in_progress: false,
        log_in_error: ""
      }
    case types.LOG_IN_USER_FAILED:
      return {
        logged_in_user: null,
        log_in_in_progress: false,
        log_in_error: action.payload
      }
    default:
      return state
  }
}

export default user_reducer
