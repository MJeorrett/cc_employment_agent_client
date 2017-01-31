import React from 'react'
import { connect } from 'react-redux'

import { logInUser } from '../redux/actions/user_actions'
import LogInBox from '../components/LogInBox'

class LogInBoxContainer extends React.Component {

  render() {
    return (
      <div>
        <LogInBox onLogIn={ this.props.logInUser }/>
        <p>logged_in_user: { JSON.stringify( this.props.logged_in_user ) }</p>
        <p>log_in_in_progress: { this.props.log_in_in_progress.toString() }</p>
        <p>log_in_error: { this.props.log_in_error.toString() }</p>
        <p>testing</p>
      </div>
    )
  }

}

const mapStateToProps = state => state
const mapDispatchToProps = dispatch => {
  return {
    logInUser: ( email, password) => {
      if ( !email.trim() || !password.trim() ) return
      dispatch( logInUser( email, password ) )
    }
  }
}

LogInBoxContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( LogInBoxContainer )

export default LogInBoxContainer
