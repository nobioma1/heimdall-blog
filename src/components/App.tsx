import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import { Post } from './Post';
import { Posts } from './Posts';

export const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Switch>
          <Route path="/" component={Posts} exact />
          <Route path="/:slug" component={Post} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
};
