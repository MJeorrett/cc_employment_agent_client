import React from 'react'

const Employer = ({ logoUrl, companyName }) => {
  return (
    <img
      src={ logoUrl }
      alt={ companyName }
      className="employer"/>
  )
}

export default Employer
