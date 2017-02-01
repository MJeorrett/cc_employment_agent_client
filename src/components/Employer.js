import React from 'react'

class Employer extends React.Component {

  render() {
    const employer = this.props.item
    return (
      <div>
        <img
          src={ employer.company_logo_url }
          alt={ employer.company_name }
          className="employer"
          onClick={ () => this.props.onEmployerSelected( employer.id ) }/>
      </div>
    )
  }

}

export default Employer
