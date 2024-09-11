// src/App.jsx
import React, { useState, useEffect, useCallback } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import useLenis from "./components/hooks/UseLennis";
import Loading from "./util/Loader/Loading";
import Sidebar from "./components/sidebar/Sidebar";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll to top on page change
  }, [pathname]);

  return null;
};

const App = () => {
  useLenis();
  const [openSidebar, setOpenSidebar] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showLoader, setShowLoader] = useState(true);

  const handleSidebar = useCallback(() => {
    setOpenSidebar((prevState) => !prevState);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    const hideLoaderTimer = setTimeout(() => setShowLoader(false), 2500);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideLoaderTimer);
    };
  }, []);

  return (
    <>
      {showLoader && <Loading isLoading={isLoading} />}
      <ScrollToTop />
      <div className={`flexPage ${isLoading ? "hide-content" : ""}`}>
        <Navbar handleSidebar={handleSidebar} openSidebar={openSidebar} />
        <Sidebar handleSidebar={handleSidebar} openSidebar={openSidebar} />
        <Outlet />
        <Footer />
      </div>
    </>
  );
};

export default React.memo(App);
