import React from 'react'
import propTypes from 'prop-types'

import Form from './form'

function Body({ onAddUser }) {
  return (
    <div>
      Body
      <Form onAddUser={onAddUser} />
    </div>
  )
}

Body.propTypes = {
  onAddUser: propTypes.func,
}

export default Body
