import React from 'react';
import { Container } from './Header.styled';
import OtherMenu from '../navigation/Menu';
import 'assets/style/css/Menu.css';
import Navigation from '../navigation/Navigation';

const Header = () => {
  return (
    <Container>
      Header
      <div className="other-menu-wrapper">
        <Navigation />
      </div>
    </Container>
  );
};

export default Header;
