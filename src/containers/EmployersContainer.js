import React from 'react'
import {connect} from 'react-redux'
import { fetchEmployers, reorderEmployer, selectEmployer } from '../redux/actions/employers_actions'
import AbsoluteGrid from 'react-absolute-grid'
import SkyLight from 'react-skylight'

import Employer from '../components/Employer'
import EmployerPreview from '../components/EmployerPreview'

class EmployersContainer extends React.Component{

  constructor() {
    super()
    this.handleEmployerClicked = this.handleEmployerClicked.bind( this )
  }

  componentDidMount() {
    this.props.fetchEmployers()
  }

  handleEmployerClicked(id) {
    this.props.selectEmployer(id)
    this.refs.simpleDialog.show()
  }

  render() {
    return (
      <div>
        <AbsoluteGrid
          items={ this.props.employers }
          displayObject={ <Employer onEmployerSelected={ this.handleEmployerClicked } /> }
          keyProp='id'
          itemWidth={ 300 }
          dragEnabled={ true }
          onMove={ this.props.reorderEmployer }/>
        <SkyLight
          hideOnOverlayClicked
          ref="simpleDialog"
          title={ this.props.selectedEmployer.company_name }>
          { <EmployerPreview employer={ this.props.selectedEmployer } /> }
        </SkyLight>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const e = state.employers
  console.log("e:", e);
  const employers = e.employer_ids.map( employerId => {
    return e.employers[employerId]
  })
  const selectedEmployer = e.selected_employer_id ? e.employers[e.selected_employer_id] : ""
  return {
    employers,
    selectedEmployer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEmployers: () => dispatch( fetchEmployers() ),
    reorderEmployer: (fromIndex, toIndex) => {
      dispatch( reorderEmployer( fromIndex, toIndex) )
    },
    selectEmployer: id => dispatch( selectEmployer(id) )
  }
}

EmployersContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(EmployersContainer)

export default EmployersContainer
