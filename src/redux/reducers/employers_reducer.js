import * as types from '../actions/types'

const defaultState = {
  fetching_in_progress: false,
  employers: {},
  employer_ids: []
}

const employers_reducer = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case types.FETCH_EMPLOYERS_STARTED:
      return Object.assign( {}, state, {
        fetching_in_progress: true
      })
    case types.FETCH_EMPLOYERS_SUCCESS:
      const employers = {}
      const employerIds = []
      action.payload.forEach( employer => {
        const id = 'e' + employer.id
        employers[id] = employer
        employerIds.push(id)
      })
      return {
        fetching_in_progress: false,
        employers: employers,
        employer_ids: employerIds
      }
    case types.REORDER_EMPLOYER:
      const employer_ids = state.employer_ids.slice(0)
      const fromIndex = state.employer_ids.indexOf( 'e' + action.payload.fromIndex )
      const toIndex = state.employer_ids.indexOf( 'e' + action.payload.toIndex )
      employer_ids.splice(toIndex, 0, employer_ids.splice(fromIndex, 1)[0])
      return Object.assign( {}, state, {
        employer_ids
      })
    default:
      return state
  }
}

export default employers_reducer
