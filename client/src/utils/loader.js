import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
`;
const spinBack = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(-720deg);
  }
}
`;

const Load = styled.div`
  margin: auto;
  position: relative;
  height: 100px;
  width: 100px;
  border: 5px solid transparent;
  border-top-color: #1976d2;
  border-left-color: #1976d2;
  border-radius: 50%;
  animation: ${spin} 1.5s linear infinite;
  &:before {
    position: absolute;
    top: 15px;
    left: 15px;
    right: 15px;
    bottom: 15px;
    content: "";
    border: 5px solid transparent;
    border-top-color: #03a9f4;
    border-left-color: #03a9f4;
    border-radius: 50%;
    animation: ${spinBack} 1s linear infinite;
`;

export const Loader = () => <Load />;
