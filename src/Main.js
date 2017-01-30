import React, { Component } from 'react'

import LogInBoxContainer from './containers/LogInBoxContainer'

class Main extends Component {
  render() {
    let contents
    if ( this.props.logged_in_user ) {
      contents = (
        <div>
          { this.props.children }
        </div>
      )
    }
    else {
      contents = <LogInBoxContainer />
    }
    return (
      <div>
        <h1>CC Employment Agent</h1>
        { contents }
      </div>
    )
  }
}

export default Main
