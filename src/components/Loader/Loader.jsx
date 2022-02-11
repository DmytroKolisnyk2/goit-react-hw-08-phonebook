import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader">
      <BallTriangle height="100" width="100" color="#4778ff" arialLabel="Loading..." />
    </div>
  );
};

export default Loader;
