import * as types from '../actions/types'

const defaultState = {
  fetching_in_progress: false,
  jobs: {},
  job_ids: []
}

const jobs_reducer = ( state = defaultState, action ) => {
  switch ( action.type ) {
    case types.FETCH_JOBS_STARTED:
      return Object.assign( {}, state, {
        fetching_in_progress: true
      })
    case types.FETCH_JOBS_SUCCESS:
      const jobs = {}
      const jobIds = []
      action.payload.forEach( job => {
        const id = 'j' + job.id
        jobs[id] = job
        jobIds.push(id)
      })
      return {
        fetching_in_progress: false,
        jobs: jobs,
        job_ids: jobIds
      }
      default:
        return state
  }
}

export default jobs_reducer