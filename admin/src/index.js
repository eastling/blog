import React from 'react'
import ReactDOM from 'react-dom'
import AppRoute from './AppRoute'
import { Router } from 'react-router-dom'
import history from '~/history'
if (module.hot) { module.hot.accept(); }

ReactDOM.render(
  <Router history={history}>
    <AppRoute />
  </Router>,
  document.getElementById('app'),
)