import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Footer } from './Footer';
import { Header } from './Header';
import { Post } from './Post';
import { Posts } from './Posts';
import { GlobalStyle } from './shared/GlobalStyle';
import { Container } from './shared/Container';
import { Loader } from './shared/Loader';

export const App = () => {
  const { loading } = useSelector(({ postsReducer }: any) => postsReducer);

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
        {loading && <Loader />}
      </div>
    </Router>
  );
};
