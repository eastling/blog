import React from 'react'
import { Route, Redirect, Switch } from 'react-router-dom'
import App from '~/App'
import LoginRoute from '~/LoginRoute'
import NoMatch from '~/NoMatch'
import AuthRoute from './AuthRoute'

class AppRoute extends React.Component {

  render() {
    return (
      <Switch>
        <Redirect exact from="/" to="/app" />
        <Route path="/login" component={LoginRoute} />
        <AuthRoute path="/app" component={App} />
        <Route component={NoMatch} />
      </Switch>
    );
  }
}

export default AppRoute
