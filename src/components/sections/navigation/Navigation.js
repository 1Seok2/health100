import React, { useState } from 'react';
import MenuList from './Menu';
import { FirebaseAuth } from 'config/fbConfig';

const Navigation = ({ pathname, userObj }) => {
  const [clicked, setClicked] = useState('none');
  const [aboutClicked, setAboutClicked] = useState('none');

  const MenuValueList = [
    {
      name: '셀프운동',
      path: '/health',
    },
    {
      name: '내 기록 보기',
      path: '/mypage',
    },
    {
      name: '처방 게시판',
      path: '/qna',
    },
    {
      name: userObj.type === true ? '자기소개등록' : '트레이너찾기',
      path: '/contact',
    },
  ];

  const onClickHBG = () => {
    const wrapper = document.querySelector('.other-menu-wrapper');
    wrapper.classList.toggle('nav-visible');
  };

  const logOut = () => FirebaseAuth.signOut();

  return (
    <div className="other-menu-wrapper">
      <header>
        <button
          aria-label="Toggle menu"
          className="nav-button button-lines button-lines-x close"
          type="button"
          onClick={onClickHBG}
        >
          <span className="lines"></span>
        </button>
      </header>
      <nav className="nav-wrapper">
        <ul className="nav">
          {MenuValueList.map((value, idx) => {
            if (idx < 2 && (userObj.type === true || userObj.type === 1)) {
              return null;
            }
            console.log(userObj);
            return (
              <MenuList
                key={value.name + value.path}
                name={value.name}
                path={value.path}
                onClickHBG={onClickHBG}
                pathname={pathname}
              />
            );
          })}

          <li className="nav-list">
            <a
              style={{
                marginTop: '4rem',
                textAlign: 'right',
                fontFamily: 'Nanum Gothic',
              }}
              href="#"
              onClick={logOut}
            >
              로그아웃
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
