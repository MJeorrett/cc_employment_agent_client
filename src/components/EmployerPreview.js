import React from 'react'

const EmployerPreview = ({ employer }) => {
  return (
    <div>
      <p><b>Contact Details:</b> { employer.contact_details }</p>
      <p><b>Business Type:</b> { employer.business_type }</p>
      <p><b>Website:</b> <a href={ employer.company_website }>{ employer.company_website }</a></p>
      <p><b>Address:</b> { employer.address }</p>
      <p><b>Number of Students Hired:</b> { employer.no_previous_students_hired }</p>
      <p><b>Notes:</b> { employer.notes }</p>
    </div>
  )
}

export default EmployerPreview
