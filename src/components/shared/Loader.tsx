import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
  to {
      transform: rotate(360deg);
    }
`;

const LoaderContainer = styled.button`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;
  border: none;

  div {
    height: 40px;
    width: 40px;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50%;

    p {
      font-size: 1.2rem;
      margin: 5px 0;
      color: #fff;
    }

    .loader {
      border-top: 2px solid #fff;
      animation: ${rotate} 600ms linear infinite;
    }
  }
`;

export const Loader = () => {
  return (
    <LoaderContainer>
      <div>
        <div className="loader"></div>
        <p>Loading...</p>
      </div>
    </LoaderContainer>
  );
};
