import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import GameDetail from '../views/GameDetail';
import Home from '../views/Home';

export default function Routes() {

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/details/:id" render={(props) => (
          <GameDetail {...props} />
        )}>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
