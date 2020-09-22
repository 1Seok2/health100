import React, { useState } from 'react';
import MenuList from './Menu';
import { FirebaseAuth } from 'config/fbConfig';

const Navigation = () => {
  const [clicked, setClicked] = useState('none');
  const [aboutClicked, setAboutClicked] = useState('none');

  const MenuValueList = [
    {
      name: '시작 페이지',
      path: '/',
    },
    {
      name: '셀프 운동',
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
          {MenuValueList.map((value) => (
            <MenuList
              key={value.name + value.path}
              name={value.name}
              path={value.path}
              onClickHBG={onClickHBG}
            />
          ))}

          <li className="nav-list">
            <a href="#" onClick={logOut}>
              로그아웃
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navigation;
