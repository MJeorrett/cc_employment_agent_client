import React from 'react'
import { connect } from 'react-redux'

import { logInUser } from '../redux/actions/user_actions'
import LogInBox from '../components/LogInBox'

class LogInBoxContainer extends React.Component {

  render() {
    return (
      <div>
        <LogInBox onLogIn={ this.props.logInUser } error={ this.props.log_in_error } />
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
