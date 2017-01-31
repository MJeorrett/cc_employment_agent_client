import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import { logOutUser } from '../redux/actions/user_actions'

class ToolbarContainer extends React.Component {

  render() {
    return (
      <nav className="toolbar">
        <span className="logo">CC Employment Agent</span>
        <div className="nav-padding"></div>
        <Link className="button" activeClassName="active-link" to="/employers">
          Employers
        </Link>
        <Link className="button" activeClassName="active-link" to="/jobs">
          Jobs
        </Link>
        <Link className="button" activeClassName="active-link" to="/students">
          Students
        </Link>
        <span id="user-name">{ this.props.user_name }</span>
        <button onClick={ () => this.props.logOutUser() }>Log Out</button>
      </nav>
    )
  }

}

const mapStateToProps = state => state.user
const mapDispatchToProps = dispatch => {
  return {
    logOutUser: () => dispatch( logOutUser() )
  }
}

ToolbarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ToolbarContainer)

export default ToolbarContainer
