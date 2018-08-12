import React from 'react';
import { Route, IndexRoute, Router, Redirect } from 'react-router';
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import BasePage from './containers/BasePage' 
import LoginPage from './containers/user/LoginPage'
import NotFound from './containers/exception/404'
import PermissionDenied from './containers/exception/403'

export default (
    <Router>
        <Route component={App} path='/'>
            <Route component={BasePage}>
                <IndexRoute component={Home} />
                <Route component={About} path='/about' />
                <Route component={PermissionDenied} path='/403' />
            </Route>
            <Route component={LoginPage} path="/login" />
            <Route component={NotFound} path="/404" />
            <Redirect from="*" to="/404" />
        </Route>
    </Router>
);
