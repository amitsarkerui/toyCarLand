import React from "react";
import gif404 from "../assets/404/404-error.gif";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="text-center mx-auto">
      <img className="w-3/4 mx-auto" src={gif404} alt="" />
      <Link className="btn">Back to Home</Link>
    </div>
  );
};

export default Error404;
