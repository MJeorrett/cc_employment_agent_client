import React from 'react'
import { connect } from 'react-redux'

import Table from '../components/Table'
import { fetchJobs } from '../redux/actions/jobs_actions'

class JobsContainer extends React.Component {

  componentDidMount() {
    this.props.fetchJobs()
  }

  render() {
    const columnNames = [
      { company_name: "Company" },
      { job_title: "Job Title" },
      { salary_range: "Salary" },
      { application_closing_date: "Closing Date" },
      { application_process: "Process" }
    ]
    return (
      <Table
        data={ this.props.jobs }
        columnNamesData={ columnNames }
      />
    )
  }
  
}

const mapStateToProps = state => {
  if ( state.jobs.job_ids ) {
    const jobs = state.jobs.job_ids.map( jobId => {
      return state.jobs.jobs[jobId]
    })
    return { jobs }
  }
  else {
    return { jobs: null }
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchJobs: jobs => dispatch( fetchJobs( jobs ) )
  }
}

JobsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(JobsContainer)

export default JobsContainer
