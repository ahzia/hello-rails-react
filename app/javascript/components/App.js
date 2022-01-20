import React from "react"
import PropTypes from "prop-types"

import {BrowserRouter, SAwitch, Route} from 'react-router-dom'
import {provider} from 'react-redux'
import HellowWorld from './HelloWorld'
import configureStore from "../configureStore"
const store = configureStore();


class App extends React.Component {
  render () {
    return (
      <Provider store={state}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => ("Home")} />
            <Route exact path="/hello" render={() => <HellowWorld greeting="Frind"/>} />
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
