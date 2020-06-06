import React from 'react'
import { createContext, useState, useContext } from 'react'
import PropTypes from 'prop-types'

const Context = createContext()

/**
 * 상위 레벨에서 childern 에 state 를 주입하기 위한 컴포넌트
 */
export function PrintContextProvider({ children }) {
  const [value, setValue] = useState('')

  return (
    <Context.Provider value={{ value, setValue }}>{children}</Context.Provider>
  )
}

/**
 * 하위 레벨에서 감싸져있는 Context 의 value 접근을 위한 hook
 */

export function usePrintContext() {
  return useContext(Context)
}

PrintContextProvider.propTypes = {
  children: PropTypes.element,
}
