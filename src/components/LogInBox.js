import React from 'react'

class Login extends React.Component {

  constructor() {
    super()
    this.handleLogIn = this.handleLogIn.bind( this )
  }

  handleLogIn( ev, email, password ) {
    ev.preventDefault()
    this.props.onLogIn( email.value, password.value )
    email.value = ""
    password.value = ""
  }

  render() {
    let email
    let password

    return (
      <div>
        <p>Login</p>
        <form onSubmit={ ( ev ) => this.handleLogIn( ev, email, password ) }>
          <input type="text" ref={ node => email = node } />
          <input type="password" ref={ node => password = node } />
          <button type="submit">Log in</button>
        </form>
        <p>{ this.props.error }</p>
      </div>
    )
  }

}

export default Login
