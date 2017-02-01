import React from 'react'
import {connect} from 'react-redux'
import { fetchEmployers } from '../redux/actions/employers_actions'

import Employer from '../components/Employer'

class EmployersContainer extends React.Component{

  componentDidMount() {
    this.props.fetchEmployers()
  }

  createEmployers() {
    return this.props.employers.map( (employer, index) => {
      return (
        <Employer
          key={ index }
          companyName={ employer.company_name }
          logoUrl={ employer.company_logo_url } />
      )
    })
  }

  render() {
    const employers = this.createEmployers()
    return <div>{ employers }</div>
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
