import React from 'react'
import {connect} from 'react-redux'
import { fetchEmployers } from '../redux/actions/employers_actions'

class EmployersContainer extends React.Component{

  componentDidMount() {
    console.log(this.props);
    this.props.fetchEmployers()
  }

  render() {
    return <p>{ this.props.employers }</p>
  }
}

const mapStateToProps = state => {
  if ( state.employer_ids ) {
    const employers = state.employer_ids.map( employerId => {
      return state.employers[employerId]
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
