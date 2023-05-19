import React from "react";
import NavBar from "../Shared/Navbar/NavBar";
import { Outlet } from "react-router-dom";
import Footer from "../Shared/Footer/Footer";

const Layout = () => {
  return (
    <div>
      <NavBar></NavBar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Layout;
