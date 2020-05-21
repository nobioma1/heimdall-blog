import React from 'react';
import styled from 'styled-components';

interface ButtonProps {
  name: string;
  disabled?: boolean;
  onClick: () => void;
}

const BtnContainer = styled.button`
  background-color: rgb(24, 136, 165);
  color: #fff;
  font-size: 1.5rem;
  border-radius: 30px;
  height: 50px;
  width: 120px;
  margin: 3px 10px;
  padding: 5px;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;

export const Button = ({ name, ...props }: ButtonProps) => {
  return <BtnContainer {...props}>{name}</BtnContainer>;
};
