import React from "react";
import "./Header.scss";

import NavList from "./NavList/NavList";
import UserMenu from "./UserMenu/UserMenu";

export default function Header() {
  return (
    <header className="header">
      <h1 className="headline">Phonebook</h1>
      <NavList />
      <UserMenu />
    </header>
  );
}
