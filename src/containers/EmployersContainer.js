import React from 'react'
import {connect} from 'react-redux'
import { fetchEmployers } from '../redux/actions/employers_actions'

class EmployersContainer extends React.Component{

  componentDidMount() {
    this.props.fetchEmployers()
  }

  render() {
    return <p>{ JSON.stringify( this.props.employers ) }</p>
  }
}

const mapStateToProps = state => {
  if ( state.employers.employer_ids ) {
    const employers = state.employers.employer_ids.map( employerId => {
      return state.employers.employers[employerId]
    })
    return { employers }
  }
  else {
    return { employers: null }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployers: () => dispatch( fetchEmployers() )
  }
}

EmployersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployersContainer)

export default EmployersContainer
