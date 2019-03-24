import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from '../pages/Home'
import Info from '../pages/Info'

const Routes = () => (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/car/:id" component={Info} />
      </Switch>
    </Router>
);

export default Routes;