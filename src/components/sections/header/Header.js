import React from 'react';
import { Container } from './Header.styled';
import 'assets/style/css/Menu.css';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <Container>
      Header
      <Navigation />
    </Container>
  );
};

export default Header;
