import React from 'react'

const Employer = ({ item }) => {
  return (
    <div>
      <img
        src={ item.company_logo_url }
        alt={ item.company_name }
        className="employer"/>
    </div>
  )
}

export default Employer
