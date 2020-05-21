import React, { useEffect } from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { fetchPost } from '../actions/posts';
import { AppState } from '../store';

const PostContainer = styled.div`
  margin: 15px;

  p,
  a {
    font-size: 1.8rem;
  }
`;

const Content = styled.div`
  p,
  a,
  h1,
  h2,
  h3,
  strong {
    font-size: 1.8rem;
  }
`;

export const Post = () => {
  const dispatch = useDispatch();
  const { params } = useRouteMatch<{ slug: string }>();
  const { post, error } = useSelector(
    ({ postsReducer }: AppState) => postsReducer
  );

  useEffect(() => {
    dispatch(fetchPost({ slug: params.slug }));
  }, []);

  return (
    <PostContainer>
      {error && (
        <>
          <p>{error}</p>
          <Link to="/">Go back</Link>
        </>
      )}
      <Content
        dangerouslySetInnerHTML={{
          __html: post ? post.content.rendered : '',
        }}
      ></Content>
    </PostContainer>
  );
};
