import * as actions from '../../actions/jobs_actions'
import jobs_reducer from '../jobs_reducer'

it('should return default state', () => {
  expect(
    jobs_reducer( undefined, {} )
  ).toEqual(
    {
      fetching_in_progress: false,
      jobs: {},
      job_ids: []
    }
  )
})

it('should handle fetch jobs started', () => {
  const mockState = {
    fetching_in_progress: false,
    jobs: {j1 : 'job1'},
    job_ids: ['j1']
  }
  expect(
    jobs_reducer( mockState, actions.fetchJobsStarted() )
  ).toEqual(
    {
      fetching_in_progress: true,
      jobs: {j1 : 'job1'},
      job_ids: ['j1']
    }
  )
})

it('should handle fetch jobs success', () => {
  const mockPayload = [
    {
      id: 1,
      name: 'job1'
    },
    {
      id: 2,
      name: 'job2'
    }
  ]
  expect(
    jobs_reducer( {}, actions.fetchJobsSuccess(mockPayload) )
  ).toEqual(
    {
      fetching_in_progress: false,
      jobs: {
        j1: {
          id: 1,
          name: 'job1'
        },
        j2: {
          id: 2,
          name: 'job2'
        }
      },
      job_ids: ['j1', 'j2']
    }
  )
})