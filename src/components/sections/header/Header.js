import React from 'react';
import { withRouter } from 'react-router-dom';
import { Container, Wrapper, MenuWrapper, SLink } from './Header.styled';
import 'assets/style/css/Menu.css';
import Navigation from '../navigation/Navigation';

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
        내 기록보기
      </SLink>
      <SLink current={pathname.includes('/qna')} to="qna">
        처방게시판
      </SLink>
      <SLink current={pathname.includes('/trainer')} to="trainer">
        트레이너 찾기
      </SLink>
    </MenuWrapper>
  </Container>
));
