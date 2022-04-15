import React from "react";
import { BallTriangle } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./Loader.scss";

const LoaderSmall = () => {
  return (
    <div className="loader">
      <BallTriangle height="55" width="55" color="#4778ff" arialLabel="Loading..." />
    </div>
  );
};

export default LoaderSmall;
