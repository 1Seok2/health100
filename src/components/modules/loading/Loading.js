import React from 'react';
import { LoadingContainer, Circle } from './Loading.styled';

const Loading = () => {
  return (
    <LoadingContainer>
      <Circle typeKey="key1"></Circle>
      <Circle typeKey="key2"></Circle>
      <Circle typeKey="key3"></Circle>
    </LoadingContainer>
  );
};

export default Loading;
