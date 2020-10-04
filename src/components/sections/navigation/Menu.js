/**
 * show hamburger nav's list
 */

import React from 'react';
import { SLink, Entity } from './Menu.styled';
import 'assets/style/font/mainFont.css';

const MenuList = ({ name, path, onClickHBG, pathname }) => {
  return (
    <li className="nav-list">
      <SLink to={path} current={pathname.includes(path)} onClick={onClickHBG}>
        {name}
        <Entity current={pathname.includes(path)} className="list-entity">
          &gt;
        </Entity>
      </SLink>
    </li>
  );
};

export default MenuList;
