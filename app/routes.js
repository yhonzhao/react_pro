import React from 'react';
import { Route, IndexRoute, Router } from 'react-router';
import App from './containers/App'
import Home from './containers/Home'
import About from './containers/About'
import BaseLayout from './containers/BaseLayout' 
import LoginLayout from './containers/LoginLayout'

export default (
    <Router>
        <Route component={App} path='/'>
            <Route component={BaseLayout}>
                <IndexRoute component={Home} />
                <Route component={About} path='about' />
            </Route>
            <Route component={LoginLayout} path="/login" />
        </Route>
    </Router>
);
