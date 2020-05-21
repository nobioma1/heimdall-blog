import React from 'react';
import moment from 'moment';
import { useSelector } from 'react-redux';
import styled from 'styled-components';

import { AppState } from '../store';

const HeaderContainer = styled.div`
  align-items: center;
  background-color: rgb(24, 136, 165);
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 20vh;
  width: 100%;
  padding: 0 40px;

  h1 {
    color: #fff;
    font-size: 4rem;
    text-align: center;
    margin: 5px 0;
  }

  p {
    color: #fff;
    font-size: 2.5rem;
    text-transform: uppercase;
  }
`;

export const Header = () => {
  const { post } = useSelector(({ postsReducer }: AppState) => postsReducer);

  return (
    <HeaderContainer>
      <h1>{post ? post.title.rendered : 'Epower Blog'}</h1>
      {post && <p>PUBLISHED ON: {moment(post.date).format('MMMM D, YYYY')}</p>}
    </HeaderContainer>
  );
};
