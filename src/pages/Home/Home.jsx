import React from "react";
import { Link } from "react-router-dom";
import path from "../routes-path.json";
import "./Home.scss";
import { useSelector, useDispatch } from "react-redux";
import { getIsAuthenticated } from "../../redux/auth/auth-selectors";
import { logOutUser } from "../../redux/auth/auth-operations";
import { getToken } from "../../redux/auth/auth-selectors";

export default function Home() {
  const dispatch = useDispatch();

  const isAuthenticated = useSelector(getIsAuthenticated);
  const token = useSelector(getToken);

  const onClickHandler = (e) => {
    e.preventDefault();
    dispatch(logOutUser(token));
  };
  return (
    <section className="home">
      <h2 className="home__headline">Home page</h2>
      <h2>{isAuthenticated ? "Go to contacts or logout" : "Please register or login"}</h2>
      <div className="home__link-wrapper">
        {isAuthenticated ? (
          <>
            <Link className="home__link" to={path.contacts}>
              Contacts
            </Link>
            <button onClick={(e) => onClickHandler(e)} type="button" className="home__link">
              Logout
            </button>
          </>
        ) : (
          <>
            <Link className="home__link" to={path.register}>
              Register
            </Link>
            <Link className="home__link" to={path.login}>
              Login
            </Link>
          </>
        )}
      </div>
    </section>
  );
}
