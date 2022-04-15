import React from "react";
import "./Header.scss";
import path from '../../pages/routes-path.json'

import { Link } from "react-router-dom";
import NavList from "./NavList/NavList";
import UserMenu from "./UserMenu/UserMenu";
import { useSelector } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import AuthList from "./AuthList/AuthList";

export default function Header() {
  const isAuthenticated = useSelector(getIsAuthenticated);
  return (
    <header className="header">
      <Link className="headline-wrapper" to={path.home}>
        <h1 className="headline">Phonebook</h1>
      </Link>
      <nav className="header__menu menu">
        <NavList isAuthenticated={isAuthenticated} />
        {isAuthenticated ? <UserMenu /> : <AuthList />}
      </nav>
    </header>
  );
}
