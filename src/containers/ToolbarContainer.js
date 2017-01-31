import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router'

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
        <button>Log Out</button>
      </nav>
    )
  }

}

const mapStateToProps = state => state.user

ToolbarContainer = connect(
  mapStateToProps
)(ToolbarContainer)

export default ToolbarContainer
