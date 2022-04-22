import React, { useContext } from "react";

import logo from "../../images/logo.jpg";
import minilogo from "../../images/mini-logo.png";
import profile from "../../images/users/profile.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faBars } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context-api/auth.context";
import { SidebarContext } from "../../context-api/sidebar.context";

const Navbar = () => {
  const { setAuthState } = useContext(AuthContext);

  
   // sidenav
  const { isVisible, setIsVisible } = useContext(SidebarContext);
 // sidenav
  return (
    <>

      <div className="topbar">
        <div className="topbar-left">
          <div className="text-center">
            <a href="" className="logo">
              <img src={logo} />
            </a>
            <a href="" className="logo-sm">
              <img src={minilogo} />
            </a>
          </div>
        </div>

        <div className="navbar navbar-default" role="navigation">
          <div className="col-sm-12">
            <div className="d-flex">
              <div className="pull-left">
                <button
                  onClick={() => {
                    setIsVisible()
                  }}
                  type="button"
                  className="button-menu-mobile open-left waves-effect waves-light"
                >
                  <FontAwesomeIcon icon={faBars} />
                </button>
                <span className="clearfix"></span>
              </div>

              <ul className="nav d-flex">
                <li className="dropdown hidden-xs">
                  <a
                    href=""
                    data-target="#"
                    className="dropdown-toggle waves-effect waves-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <FontAwesomeIcon icon={faBell} />
                    <span className="badge badge-xs badge-danger">3</span>
                  </a>
                  <ul className="dropdown-menu dropdown-menu-lg">
                    <li className="text-center notifi-title">
                      Notification
                      <span className="badge badge-xs badge-success">3</span>
                    </li>
                    <li className="list-group">
                      <a href="" className="list-group-item">
                        <div className="media">
                          <div className="media-heading">
                            Your order is placed
                          </div>
                          <p className="m-0">
                            <small>
                              Dummy text of the printing and typesetting
                              industry.
                            </small>
                          </p>
                        </div>
                      </a>
                      <a href="" className="list-group-item">
                        <div className="media">
                          <div className="media-body clearfix">
                            <div className="media-heading">
                              New Message received
                            </div>
                            <p className="m-0">
                              <small>You have 87 unread messages</small>
                            </p>
                          </div>
                        </div>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="dropdown">
                  <a
                    href=""
                    className="dropdown-toggle profile waves-effect waves-light"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <img src={profile} alt="user-img" className="img-circle" />
                  </a>
                  <ul className="dropdown-menu">
                    <li className="list-group">
                      <a href="" className="list-group-item">
                        Profile
                      </a>
                    </li>
                    <li>
                      <a href="" className="list-group-item">
                        Settings
                      </a>
                    </li>

                    <li className="list-group">
                      <a type="button" onClick={() => {
                        setAuthState({
                          user_details: {},
                          is_authenticated: false
                        })
                      }} className="list-group-item">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>


    </>
  );
};

export default Navbar;
