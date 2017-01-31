import React, { Component } from 'react'
import { connect } from 'react-redux'

import LogInBoxContainer from './containers/LogInBoxContainer'
import ToolbarContainer from './containers/ToolbarContainer'

class Main extends Component {

  getContents() {
    if ( this.props.logged_in_user ) {
      return (
        <div>
          <ToolbarContainer />
          { this.props.children }
        </div>
      )
    }
    else {
      return <LogInBoxContainer />
    }
  }

  render() {
    return (
      <div>
        <h1>CC Employment Agent</h1>
        { this.getContents() }
      </div>
    )
  }
}

const mapStateToProps = state => state.user

Main = connect(
  mapStateToProps
)(Main)

export default Main
