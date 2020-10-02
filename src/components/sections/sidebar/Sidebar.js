import React, { useEffect, useState } from 'react';
import { FirebaseAuth } from 'config/fbConfig';
import { withRouter } from 'react-router-dom';
import 'assets/style/fontello-ce02e094/css/fontello-embedded.css';
import {
  Container,
  Wrapper,
  LogoImg,
  LogOut,
  ItemWrapper,
  Item,
  ItemDesc,
  Extends,
} from './Sidebar.styled';

export default withRouter(({ location: { pathname }, userObj }) => {
  const [extend, setExtend] = useState(false);

  const MenuValueList = [
    {
      name: 'icon-pitch',
      title: '셀프운동',
      path: '/health',
    },
    {
      name: 'icon-edit',
      title: '내 운동기록',
      path: '/mypage',
    },
    {
      name: 'icon-stethoscope',
      title: '처방목록',
      path: '/qna',
    },
    {
      name: userObj.type === true ? 'icon-sitemap' : 'icon-megaphone',
      title: userObj.type === true ? '소개등록' : '트레이너찾기',
      path: '/contact',
    },
  ];

  useEffect(() => {
    setExtend(false);
  }, [pathname]);

  if (userObj.type === 2) return null;

  return (
    <Container extend={extend}>
      <Wrapper>
        <LogoImg extend={extend}>
          {extend && userObj.tName && userObj.tName} <br />
          {extend && userObj.email}
          {extend && (
            <LogOut onClick={() => FirebaseAuth.signOut()}>로그아웃</LogOut>
          )}
        </LogoImg>
        <ItemWrapper>
          {MenuValueList.map((menu) => (
            <Item
              to={menu.path}
              key={menu.path}
              current={pathname.includes(menu.path)}
              extend={extend}
            >
              <i
                className={menu.name}
                style={
                  pathname.includes(menu.path)
                    ? {
                        fontSize: '2rem',
                        margin: 0,
                        color: '#092c6f',
                      }
                    : {
                        fontSize: '1.8rem',
                        margin: 0,
                        color: '#efefef',
                      }
                }
              />
              <ItemDesc current={pathname.includes(menu.path)} extend={extend}>
                {menu.title}
              </ItemDesc>
            </Item>
          ))}
        </ItemWrapper>
        <Extends onClick={() => setExtend(!extend)} extend={extend}>
          <i
            className={!extend ? 'icon-right-open' : 'icon-left-open'}
            style={{ fontSize: '1.6rem', margin: 0, color: 'white' }}
          />
        </Extends>
      </Wrapper>
    </Container>
  );
});

// export default Sidebar;
