import React from "react";
import logo from "./assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
function Navbar() {
  return (
    <>
      <>
        {/* header area start */}
        <TopHeader />
        <header className="header v__5  header__sticky">
          <div className="container-fluid">
            <div className="row">
              <div className="col-xl-12">
                <div className="header__wrapper">
                  <div className="header__logo">
                    <Link to="/" className="header__logo--link">
                      <img
                        src={logo}
                        alt="Ghanshyam Group of Institutions"
                        style={{ width: "140px" }}
                      />
                    </Link>
                  </div>
                  <div className="header__menu">
                    <div className="navigation">
                      <nav className="navigation__menu">
                        <ul>
                          <li className="navigation__menu--item">
                            <Link
                              to="/"
                              className="navigation__menu--item__link"
                            >
                              Home
                            </Link>
                          </li>
                          <li className="navigation__menu--item has-child has-arrow">
                            <a
                              href="javascript:void(0);"
                              className="navigation__menu--item__link"
                            >
                              About
                            </a>
                            <ul className="submenu sub__style">
                              <li>
                                <Link to="/about-us">Introduction</Link>
                              </li>
                              <li>
                                <a href="/vision-mission">Vision & Mission</a>
                              </li>
                              <li>
                                <a href="/messages">About Content Message</a>
                              </li>
                            </ul>
                          </li>
                          <li className="navigation__menu--item">
                            <a
                              href='/#institution'
                              className="navigation__menu--item__link"
                            >
                              Institutions
                            </a>
                          </li>
                           <li className="navigation__menu--item">
                            <Link
                              to='/contact'
                              className="navigation__menu--item__link"
                            >
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>
      </>
    </>
  );
}
export default Navbar;