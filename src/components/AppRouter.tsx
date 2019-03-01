import React, { Component } from 'react'
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import MainPage from './MainPage'
import Dashboard from './Dashboard'
import DropDrag from './DropDrag'
import FileInput from './FileInput'

export default class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact={true} path="/" component={MainPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/dropdrag" component={DropDrag} />
          <Route path="/file-input" component={FileInput} />

          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    )
  }
}
