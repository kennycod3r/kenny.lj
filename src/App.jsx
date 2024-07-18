import React, { useState, useRef, useCallback } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import useLenis from "./components/hooks/UseLennis";
import { Outlet } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/sidebar/Sidebar";

const App = () => {
  useLenis();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebar = useCallback(() => {
    setOpenSidebar((prevState) => !prevState);
  }, []);

  return (
    <div className="flexPage">
      <Navbar
        handleSidebar={handleSidebar}
        openSidebar={openSidebar}
      />
      <Sidebar handleSidebar={handleSidebar} openSidebar={openSidebar} />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default React.memo(App);