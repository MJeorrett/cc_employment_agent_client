import React from 'react'
import {connect} from 'react-redux'
import {fetchEmployers} from '../redux/actions/employers_actions'

class EmployersContainer extends React.Component{ 

  componentDidMount() {
    this.props.fetchEmployers()
  }

  render() {
    return <p>{ this.props.employers }</p>
  }
}

const mapStateToProps = state => {
  const employers = state.employer_ids.map( employerId => {
    return state.employers[employerId]
  })
  return { employers }
}

const mapDispatchToProps = dispatch => {
  return { fetchEmployers : dispatch( fetchEmployers()) }
}

EmployersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)( EmployersContainer )

export default EmployersContainer