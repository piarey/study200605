import React from 'react'

import { usePrintContext } from './context'

function Right() {
  const { value } = usePrintContext()

  return <div>input 의 값을 표현</div>
}

export default Right
