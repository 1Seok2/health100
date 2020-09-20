import React from 'react';
import { Link } from 'react-router-dom';

const MenuList = ({ name, path }) => {
  return (
    <li className="nav-list">
      <Link to={path}>
        {name}
        <span className="list-entity">&gt;</span>
      </Link>
    </li>
  );
};

export default MenuList;
