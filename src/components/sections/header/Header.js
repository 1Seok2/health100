import React from 'react';
import { FirebaseAuth } from 'config/fbConfig';
import { withRouter } from 'react-router-dom';
import {
  Container,
  Wrapper,
  UserType,
  MenuWrapper,
  SLink,
  LogOut,
} from './Header.styled';
import 'assets/style/css/Menu.css';
import Navigation from '../navigation/Navigation';

const logOut = () => FirebaseAuth.signOut();

/* header title & navbar */
export default withRouter(({ location: { pathname }, userObj }) => (
  <Container mode={userObj.type === 2}>
    <Wrapper>
      비대면 국민체력100
      {userObj.type && userObj.type !== 2 ? (
        <UserType>&nbsp;{userObj.tName} TRAINER</UserType>
      ) : null}
      {userObj.type === 2 ? <UserType>&nbsp;ADMIN</UserType> : null}
    </Wrapper>
    {userObj.type !== 2 && (
      <>
        <Navigation pathname={pathname} userObj={userObj} />
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
          <SLink current={pathname.includes('/contact')} to="contact">
            {userObj.type === true ? '자기소개등록' : '트레이너찾기'}
          </SLink>
          <LogOut onClick={logOut}>로그아웃</LogOut>
        </MenuWrapper>
      </>
    )}
  </Container>
));
