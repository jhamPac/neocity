import * as React from 'react'
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { styleReset } from 'react95'

import original from 'react95/dist/themes/original'
import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2'
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2'

import LandingPage from './LandingPage'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    background: #008080;
    font-family: 'ms_sans_serif';
  }
  ${styleReset}
`

export default function MainRouter() {
    return (
        <Router>
            <GlobalStyles />
            <main>
                <Switch>
                    <Route exact path="/">
                        <ThemeProvider theme={original}>
                            <LandingPage />
                        </ThemeProvider>
                    </Route>
                </Switch>
            </main>
        </Router>
    )
}
