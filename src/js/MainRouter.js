import React from 'react'
import {HashRouter as Router, Route, Switch} from 'react-router-dom'
import injectSheet from 'react-jss'

import LandingPage from './LandingPage'
import styles from './styles'

const MainRouter = ({classes}) => (
  <Router>
    <main className={classes.ui}>
      <Switch>
        <Route exact path="/">
          <LandingPage />
        </Route>
      </Switch>
    </main>
  </Router>
)

export default injectSheet(styles)(MainRouter)
