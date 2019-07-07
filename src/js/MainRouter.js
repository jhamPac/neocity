import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'

import LandingPage from './LandingPage'

export default function MainRouter() {
  return (
    <Router>
      <main id="UI" className="container">
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
        </Switch>
      </main>
    </Router>
  )
}
