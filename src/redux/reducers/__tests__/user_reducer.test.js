import * as types from '../../actions/types'
import { setLoggedInUser } from '../../actions/user_actions'
import user_reducer from '../user_reducer'

it('should return default state', () => {
  expect(
    user_reducer( undefined, {} )
  ).toEqual(
    {
      current_user: undefined
    }
  )
})

it('should set current user', () => {
  expect(
    user_reducer( {}, setLoggedInUser( "test data" ) )
  ).toEqual(
    {
      logged_in_user: "test data"
    }
  )
})
