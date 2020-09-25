import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Wrapper, Menu, MenuWrapper, SLink } from './Header.styled';
import 'assets/style/css/Menu.css';
import Navigation from '../navigation/Navigation';

console.log(window.innerWidth);

/* header title & navbar */
export default withRouter(({ location: { pathname } }) => (
  <Container>
    <Wrapper>HEALTH100</Wrapper>
    <Navigation />
    <MenuWrapper>
      <Menu current={pathname === '/'}>
        <SLink current={pathname === '/'} to="/">
          셀프운동
        </SLink>
      </Menu>
      <Menu current={pathname.includes('/mypage')}>
        <SLink current={pathname.includes('/mypage')} to="/mypage">
          내 기록보기
        </SLink>
      </Menu>
      <Menu current={pathname.includes('/qna')}>
        <SLink current={pathname.includes('/qna')} to="qna">
          처방게시판
        </SLink>
      </Menu>
      <Menu current={pathname.includes('/trainer')}>
        <SLink current={pathname.includes('/trainer')} to="trainer">
          트레이너 찾기
        </SLink>
      </Menu>
    </MenuWrapper>
  </Container>
));
