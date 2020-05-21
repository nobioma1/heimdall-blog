import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';

import { Button } from './shared/Button';
import { Container } from './shared/Container';
import { fetchPosts } from '../actions/posts';
import { Card } from './Card';
import { AppState } from '../store';
import { Post } from '../actions/posts.types';

const PostsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 40px 0;
`;

const BtnContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0;
`;

export const Posts = () => {
  const dispatch = useDispatch();
  const { posts, offset } = useSelector(
    ({ postsReducer }: AppState) => postsReducer
  );

  useEffect(() => {
    dispatch(fetchPosts({ offset }));
  }, []);

  const renderedPosts = posts.map((post: Post) => {
    return <Card key={post.id} post={post} />;
  });

  return (
    <Container>
      {posts.length > 0 && (
        <>
          <PostsContainer>{renderedPosts}</PostsContainer>
          <BtnContainer>
            <Button
              name="Previous"
              disabled={offset === 0}
              onClick={() =>
                offset !== 0 && dispatch(fetchPosts({ offset: offset - 6 }))
              }
            />
            <Button
              name="Next"
              onClick={() => dispatch(fetchPosts({ offset: offset + 6 }))}
            />
          </BtnContainer>
        </>
      )}
    </Container>
  );
};
