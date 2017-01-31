import * as actions from '../../actions/user_actions'
import user_reducer from '../user_reducer'

it('should return default state', () => {
  expect(
    user_reducer( undefined, {} )
  ).toEqual(
    {
      logged_in_user: null,
      log_in_in_progress: false,
      log_in_error: ""
    }
  )
})

it('should start log in', () => {
  expect(
    user_reducer( {}, actions.logInUserStarted() )
  ).toEqual(
    {
      logged_in_user: null,
      log_in_in_progress: true,
      log_in_error: ""
    }
  )
})

it('should handle log in success', () => {
  const mockUser = {
    name: "test",
    email: "test@test.com"
  }
  expect(
    user_reducer( {}, actions.logInUserSuccess( mockUser ) )
  ).toEqual(
    {
      logged_in_user: mockUser,
      log_in_in_progress: false,
      log_in_error: ""
    }
  )
})

it('should handle log in faliure', () => {
  expect(
    user_reducer( {}, actions.logInUserFailed( "test error" ) )
  ).toEqual(
    {
      logged_in_user: null,
      log_in_in_progress: false,
      log_in_error: "test error"
    }
  )
})

it('should handle log out user success', () => {
  const mockState = {
    logged_in_user: {
      name: "test name",
      email: "test@test.com"
    },
    log_in_in_progress: false,
    log_in_error: ""
  }
  expect(
    user_reducer( mockState, actions.logOutUserSuccess() )
  ).toEqual(
    {
      logged_in_user: null,
      log_in_in_progress: false,
      log_in_error: ""
    }
  )
})
