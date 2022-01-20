import React from "react"
import PropTypes from "prop-types"

import {BrowserRouter, SAwitch, Route} from 'react-router-dom'

import HellowWorld from './HelloWorld'

class App extends React.Component {
  render () {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => ("Home")} />
          <Route exact path="/hello" render={() => <HellowWorld greeting="Frind"/>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App
