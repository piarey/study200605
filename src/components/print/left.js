import React from 'react'

import { usePrintContext } from './context'

function Left() {
  const { setValue } = usePrintContext()

  return (
    <div>
      <input
        onChange={(e) => {
          setValue(e.target.value)
        }}
      />
    </div>
  )
}

export default Left
