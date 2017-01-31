import React, { Component } from 'react'
import { connect } from 'react-redux'

import LogInBoxContainer from './containers/LogInBoxContainer'

class Main extends Component {

  getContents() {
    if ( this.props.logged_in_user ) {
      return (
        <div>
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

const mapStateToProps = state => state

Main = connect(
  mapStateToProps
)(Main)

export default Main
