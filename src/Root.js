import React from 'react'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import App from './App'
import Welcome from './components/Welcome'
import Employers from './components/Employers'

function Root() {
  return (
    <Router history={ browserHistory }>
      <Route path="/" component={ App } >
        <IndexRoute component={ Welcome } />
        <Route path="employers" component={ Employers } />
      </Route>
    </Router>
  )
}

export default Root
