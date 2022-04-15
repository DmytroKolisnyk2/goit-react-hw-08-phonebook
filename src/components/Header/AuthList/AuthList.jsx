import { NavLink } from "react-router-dom";
import path from "../../../pages/routes-path.json";

import React from 'react';

const AuthList = () => {
  return (
    <ul className="menu__list">
      <li className="list__item">
        <NavLink
          className={({ isActive }) => (isActive ? "list__link list__link--active" : "list__link")}
          to={path.register}
        >
          Register
        </NavLink>
      </li>
      <li className="list__item">
        <NavLink
          className={({ isActive }) => (isActive ? "list__link list__link--active" : "list__link")}
          to={path.login}
        >
          Login
        </NavLink>
      </li>
    </ul>
  );
}

export default AuthList;
;
