import React from 'react';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Wrapper,
  MenuWrapper,
  SLink,
  LogOut,
} from './Header.styled';
import 'assets/style/css/Menu.css';
import Navigation from '../navigation/Navigation';
import { FirebaseAuth } from 'config/fbConfig';

const logOut = () => FirebaseAuth.signOut();

/* header title & navbar */
export default withRouter(({ location: { pathname } }) => (
  <Container>
    <Wrapper>HEALTH100</Wrapper>
    <Navigation pathname={pathname} />
    <MenuWrapper>
      <SLink current={pathname.includes('/health')} to="/health">
        셀프운동
      </SLink>
      <SLink current={pathname.includes('/mypage')} to="/mypage">
        내기록보기
      </SLink>
      <SLink current={pathname.includes('/qna')} to="qna">
        처방게시판
      </SLink>
      <SLink current={pathname.includes('/trainer')} to="trainer">
        트레이너찾기
      </SLink>
      <LogOut onClick={logOut}>로그아웃</LogOut>
    </MenuWrapper>
  </Container>
));
