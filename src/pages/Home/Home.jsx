import React from "react";
import { Link } from "react-router-dom";
import path from "../routes-path.json";
import "./Home.scss";

export default function Home() {
  return (
    <section className="home">
      <h2 className="home__headline">Home page</h2>
      <h2>Please register or login</h2>
      <div className="home__link-wrapper">
        <Link className="home__link" to={path.register}>
          Register
        </Link>
        <Link className="home__link" to={path.login}>
          Login
        </Link>
      </div>
    </section>
  );
}
