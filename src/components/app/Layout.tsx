import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "./Navbar";

const Layout = () => (
  <>
    <Navbar />
    <main className="App">
      <Outlet />
    </main>
  </>
);

export default Layout;
