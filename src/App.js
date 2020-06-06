import React from 'react'
import Box from './components/box'
import SignupPage from './pages/signup'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
/*
import HomePage from './pages/HomePage'
import ErrorPage from './pages/ErrorPage'
import TodoPage from './pages/TodoPage'
*/
// 방식이 달라져서 아래와 같이 씀.
import { HomePage, ErrorPage, TodoPage } from './pages'

import GlobalStyles from './components/shared/global-styles'
import Gnb from './components/gnb'

/*
function App() {
  return (
    <div>
      <Box />
      <SignupPage />
    </div>
  )
}
*/

function App() {
  return (
    <Router>
      <GlobalStyles />
      <Gnb />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/todo" component={TodoPage} />
        <Route path="/signup" component={SignupPage} />
        <Route component={ErrorPage} />
      </Switch>
    </Router>
  )
}

export default App
