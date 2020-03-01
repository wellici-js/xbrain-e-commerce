import React, { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Product from '../pages/Products';
import Checkout from '../pages/Checkout';

const Routes: FC = () => {
  return (
    <Router>
      <Switch>

        <Route path="/products/:id">
          <Product />
        </Route>

        <Route path="/checkout/:name">
          <Checkout />
        </Route>

      </Switch>
    </Router>
  );
}

export default Routes;