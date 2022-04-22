import React, { useEffect, useContext } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../context-api/auth.context";
import Footer from "../component/footer/footer";
import Sidebar from "../component/sidebar/sidebar";
import Navbar from "../component/navbar/navbar";
import { SidebarContext } from '../context-api/sidebar.context'

const Dashboard = () => {
  const { isVisible, setIsVisible } = useContext(SidebarContext);
  const navigate = useNavigate();
  const location = useLocation();
  const { authState } = useContext(AuthContext);
  useEffect(() => {
    if (!authState.is_authenticated)
      navigate("/login")

    if (location.pathname === "/" && !authState.is_authenticated)
      navigate("/dashboard", {
        replace: true,
      });
  }, [authState]);
  return (
    <div id="wrapper">
      <Navbar />
      <Sidebar />
             {/* sidenav */}
          <div className={`${isVisible ? "content-page m-0": "content-page "} `} >
              {/* sidenav */}
        <div className="content">
          <Outlet />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
