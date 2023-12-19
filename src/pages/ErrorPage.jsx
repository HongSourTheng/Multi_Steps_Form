import React from "react";
import { Link } from "react-router-dom";
import errorImg from "../assets/img/error_img_2.png";
const ErrorPage = () => {
  return (
    <div className="error-box">
      <img src={errorImg} alt="error-img" />
      <Link to={"/"}>GO HOME</Link>
    </div>
  );
};

export default ErrorPage;
