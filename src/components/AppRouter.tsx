import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import MainPage from './MainPage'

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainPage} />

          {/* <Redirect to="/" /> */}
        </Switch>
      </BrowserRouter>
    )
  }
}
