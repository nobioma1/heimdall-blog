import React from 'react';
import styled from 'styled-components';

const ContainerDiv = styled.div`
  min-height: 70vh;
  max-width: 980px;
  margin: 0 auto;
`;

interface ContainerProps {
  children: any;
}

export const Container = ({ children }: ContainerProps) => {
  return (
    <ContainerDiv>
      <div>{children}</div>
    </ContainerDiv>
  );
};
