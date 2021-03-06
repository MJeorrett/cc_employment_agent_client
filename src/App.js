import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'

import user_reducer from './redux/reducers/user_reducer'

import Main from './Main'
import Welcome from './components/Welcome'
import Employers from './components/Employers'

const store = createStore(
  user_reducer,
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
          <Route path="employers" component={ Employers } />
        </Route>
      </Router>
    </Provider>
  )
}

export default App
