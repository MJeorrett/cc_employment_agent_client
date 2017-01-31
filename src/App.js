import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import root_reducer from './redux/reducers'

import Main from './Main'
import Welcome from './components/Welcome'
import EmployersContainer from './containers/EmployersContainer'
import JobsContainer from './containers/JobsContainer'
import StudentsContainer from './containers/StudentsContainer'

const store = createStore(
  root_reducer,
  applyMiddleware(
    thunkMiddleware
  )
)

function App() {
  return (
    <Provider store={ store }>
      <Router history={ browserHistory }>
        <Route path="/" component={ Main } >
          <IndexRoute component={ Welcome } />
          <Route path="employers" component={ EmployersContainer } />
          <Route path="jobs" component={ JobsContainer } />
          <Route path="students" component={ StudentsContainer } />
        </Route>
      </Router>
    </Provider>
  )
}

export default App
