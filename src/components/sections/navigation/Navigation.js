import React, { useState } from 'react';
import MenuList from './Menu';

const Navigation = () => {
  const [clicked, setClicked] = useState('none');
  const [aboutClicked, setAboutClicked] = useState('none');

  const MenuValueList = [
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

  const onClickAbout = () => {
    const about = document.querySelector('.other-menu-about');
    if (aboutClicked === 'none') {
      setAboutClicked('show');
      about.classList.remove('none');
      about.classList.add('show');
    } else {
      setAboutClicked('none');
      about.classList.remove('show');
      about.classList.add('none');
    }
  };

  const onClickHBG = (e) => {
    e.preventDefault();
    const wrapper = document.querySelector('.other-menu-wrapper');
    wrapper.classList.toggle('nav-visible');
  };

  return (
    <>
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
          {MenuValueList.map((value) => {
            return (
              <MenuList
                key={value.name + value.path}
                name={value.name}
                path={value.path}
              />
            );
          })}
          <li className="nav-list">
            <a href="#" onClick={onClickAbout}>
              ABOUT
              <span className="list-entity">&gt;</span>
            </a>
          </li>
          <ul className="other-menu-about none">
            <li>
              <a href="https://apis.map.kakao.com/">@KAKAO MAP</a>
            </li>
            <li>
              <a href="https://github.com/1Seok2/Hack-GreenSky">@GITHUB</a>
            </li>
            <li>
              <a href="mailto:unos@khu.ac.kr">CONTACT</a>
            </li>
          </ul>
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
