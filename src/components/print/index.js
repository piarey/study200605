import React from 'react'
import Left from './left'
import Right from './right'
import { PrintContextProvider } from './context'

function Print() {
  return (
    <div>
      <PrintContextProvider>
        <Left />
        <Right />
      </PrintContextProvider>
    </div>
  )
}

export default Print
