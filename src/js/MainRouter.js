import React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'

const LandingPage = props => (<div>PHX 2084</div>)

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
