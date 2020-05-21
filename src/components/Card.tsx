import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Post } from '../actions/posts.types';

const CardContainer = styled(Link)`
  height: 420px;
  margin: 20px;
  width: 280px;
  text-decoration: none;
  color: #000;
  box-shadow: 0px 17px 11px 1px rgba(0, 0, 0, 0.09);

  & > div {
    width: 100%;
    img {
      width: 100%;
      height: 200px;
    }
  }

  section {
    padding: 20px;
    text-align: center;

    h1 {
      font-size: 1.5rem;
      height: 50px;
      text-transform: capitalize;
    }

    div {
      overflow: hidden;
      height: 140px;
      p {
        font-size: 1.3rem;
        margin: 5px 0;
      }
    }
  }
`;

interface CardProps {
  post: Post;
}

export const Card = ({ post }: CardProps) => {
  return (
    <CardContainer to={post.slug}>
      <div>
        <img src={post.featured_image} />
      </div>
      <section>
        <h1>{post.title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: post && post.excerpt.rendered,
          }}
        ></div>
      </section>
    </CardContainer>
  );
};
