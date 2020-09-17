import React from 'react';
import AppRouter from './Router';
import GlobalStyle from 'components/modules/style/Global.Styled';
import Header from './sections/header';

const App = () => {
  return (
    <>
      <Header />
      <AppRouter />
      <GlobalStyle />
    </>
  );
};

export default App;
