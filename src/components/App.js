import React from 'react';
import AppRouter from './Router';
import GlobalStyle from 'components/modules/style/Global.Styled';
import { OuterContainer } from './App.styled';
import Header from './sections/header';

const App = () => {
  return (
    <>
      <OuterContainer>
        <AppRouter />
      </OuterContainer>
      <GlobalStyle />
    </>
  );
};

export default App;
