import * as actions from '../../actions/employers_actions'
import employers_reducer from '../employers_reducer'

it('should return default state', () => {
  expect(
    employers_reducer( undefined, {} )
  ).toEqual(
    {
      fetching_in_progress: false,
      employers: {},
      employer_ids: [],
      selected_employer_id: null
    }
  )
})

it('should handle fetch employers started', () => {
  const mockState = {
    fetching_in_progress: false,
    employers: {e1 : 'employer1'},
    employer_ids: ['e1'],
    selected_employer_id: "should stay the same"
  }
  expect(
    employers_reducer( mockState, actions.fetchEmployersStarted() )
  ).toEqual(
    {
      fetching_in_progress: true,
      employers: {e1 : 'employer1'},
      employer_ids: ['e1'],
      selected_employer_id: "should stay the same"
    }
  )
})

it('should handle fetch employers success', () => {
  const mockState = {
    fetching_in_progress: true,
    employers: "old data should be overwritten",
    employer_ids: "old data shold be overwritten",
    selected_employer_id: "old data should be overwritten"
  }
  const mockPayload = [
    {
      id: 1,
      name: 'employer1'
    },
    {
      id: 2,
      name: 'employer2'
    }
  ]
  expect(
    employers_reducer( mockState, actions.fetchEmployersSuccess(mockPayload) )
  ).toEqual(
    {
      fetching_in_progress: false,
      employers: {
        e1: {
          id: 1,
          name: 'employer1'
        },
        e2: {
          id: 2,
          name: 'employer2'
        }
      },
      employer_ids: ['e1', 'e2'],
      selected_employer_id: null
    }
  )
})

it('should handle select employer', () => {
  const mockState = {
    fetching_in_progress: " fetching_in_progress should remain unchanged",
    employers: "employers should remain unchanged",
    employer_ids: "employer_ids should remain unchanged",
    selected_employer_id: null
  }
  expect(
    employers_reducer( mockState, actions.selectEmployer(3) )
  ).toEqual({
    fetching_in_progress: " fetching_in_progress should remain unchanged",
    employers: "employers should remain unchanged",
    employer_ids: "employer_ids should remain unchanged",
    selected_employer_id: 'e3'
  })
})

it('should handle reorder employer', () => {
  const mockState = {
    employers: "should remain unchanged",
    employer_ids: [ 'e3', 'e2', 'e1', 'e4' ]
  }
  expect(
    employers_reducer( mockState, actions.reorderEmployer( 1, 2 ) )
  ).toEqual(
    {
      employers: "should remain unchanged",
      employer_ids: [ 'e3', 'e1', 'e2', 'e4' ]
    }
  )
  expect(
    employers_reducer( mockState, actions.reorderEmployer( 1, 4 ) )
  ).toEqual(
    {
      employers: "should remain unchanged",
      employer_ids: [ 'e3', 'e2', 'e4', 'e1' ]
    }
  )
  expect(
    employers_reducer( mockState, actions.reorderEmployer( 1, 1 ) )
  ).toEqual(
    {
      employers: "should remain unchanged",
      employer_ids: [ 'e3', 'e2', 'e1', 'e4' ]
    }
  )
  expect(
    employers_reducer( mockState, actions.reorderEmployer( 2, 1 ) )
  ).toEqual(
    {
      employers: "should remain unchanged",
      employer_ids: [ 'e3', 'e1', 'e2', 'e4' ]
    }
  )
  expect(
    employers_reducer( mockState, actions.reorderEmployer( 3, 4 ) )
  ).toEqual(
    {
      employers: "should remain unchanged",
      employer_ids: [ 'e2', 'e1', 'e4', 'e3' ]
    }
  )
})
