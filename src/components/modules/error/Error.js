import React from 'react';
import { Error } from './Error.styled';

const ErrorContainer = ({ txt }) => {
  return <Error>{txt}</Error>;
};

export default ErrorContainer;
