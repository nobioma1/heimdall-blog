import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Footer } from './Footer';
import { Header } from './Header';
import { Post } from './Post';
import { Posts } from './Posts';
import { GlobalStyle } from './shared/GlobalStyle';
import { Container } from './shared/Container';

export const App = () => {
  return (
    <Router>
      <GlobalStyle />
      <div>
        <Header />
        <Container>
        <Switch>
          <Route path="/" component={Posts} exact />
          <Route path="/:slug" component={Post} />
        </Switch>
        </Container>
        <Footer />
      </div>
    </Router>
  );
};
