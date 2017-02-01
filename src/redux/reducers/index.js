import { combineReducers } from 'redux'

import user_reducer from './user_reducer'
import employers_reducer from './employers_reducer'
import jobs_reducer from './jobs_reducer'

const root_reducer = combineReducers({
  user: user_reducer,
  employers: employers_reducer,
  jobs: jobs_reducer
})

export default root_reducer
