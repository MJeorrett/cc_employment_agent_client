import React from 'react'
import {connect} from 'react-redux'
import { fetchEmployers, reorderEmployer } from '../redux/actions/employers_actions'
import AbsoluteGrid from 'react-absolute-grid'

import Employer from '../components/Employer'

class EmployersContainer extends React.Component{

  componentDidMount() {
    this.props.fetchEmployers()
  }

  render() {
    return (
      <AbsoluteGrid
        items={ this.props.employers }
        displayObject={ <Employer /> }
        keyProp='id'
        itemWidth={ 300 }
        dragEnabled={ true }
        onMove={ this.props.reorderEmployer }/>
    )
  }
}

const mapStateToProps = state => {
  if ( state.employers.employer_ids ) {
    const employers = state.employers.employer_ids.map( employerId => {
      return state.employers.employers[employerId]
    })
    return {
      employers,
      employer_ids: state.employers.employer_ids
    }
  }
  else {
    return { employers: null }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployers: () => dispatch( fetchEmployers() ),
    reorderEmployer: (fromIndex, toIndex) => {
      dispatch( reorderEmployer( fromIndex, toIndex) )
    }
  }
}

EmployersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployersContainer)

export default EmployersContainer
