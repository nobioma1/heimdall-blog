import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.div`
  align-items: center;
  background-color: rgb(24, 136, 165);
  display: flex;
  justify-content: center;
  height: 10vh;
  width: 100%;

  p {
    color: #fff;
    font-size: 2.5rem;
    text-align: center;
  }
`;

export const Footer = () => {
  return (
    <FooterContainer>
      <p>Copyright 2019</p>
    </FooterContainer>
  );
};
