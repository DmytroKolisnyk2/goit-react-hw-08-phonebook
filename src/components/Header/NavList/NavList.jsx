import React from "react";
import { NavLink } from "react-router-dom";
import path from "../../../pages/routes-path.json";

export default function NavList({ isAuthenticated }) {
  return (
    <ul className="menu__list">
      <li className="list__item">
        <NavLink
          className={({ isActive }) => (isActive ? "list__link list__link--active" : "list__link")}
          to={path.home}
        >
          Home
        </NavLink>
      </li>
      {isAuthenticated && (
        <li className="list__item">
          <NavLink
            className={({ isActive }) =>
              isActive ? "list__link list__link--active" : "list__link"
            }
            to={path.contacts}
          >
            Contacts
          </NavLink>
        </li>
      )}
    </ul>
  );
}
