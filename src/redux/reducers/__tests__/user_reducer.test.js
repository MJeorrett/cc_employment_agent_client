import { logInUser } from '../../actions/user_actions'
import user_reducer from '../user_reducer'

it('should return default state', () => {
  expect(
    user_reducer( undefined, {} )
  ).toEqual(
    {
      logged_in_user: null
    }
  )
})

it('should log in user', () => {
  expect(
    user_reducer( {}, logInUser( "test@email.com", "testPassword" ) )
  ).toEqual(
    {
      logged_in_user: "test@email.com"
    }
  )
})
