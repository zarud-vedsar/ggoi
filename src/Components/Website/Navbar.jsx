import React, { useState } from "react";
import logo from "./assets/images/logo/logo.png";
import { Link } from "react-router-dom";
import TopHeader from "./TopHeader";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [isSiderBarOpen, setIsSideBarOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(0);
  const toggleSideBar = () => {
    setIsSideBarOpen(() => !isSiderBarOpen);
  }
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
                  <div className="d-inline d-lg-none">
                    <button className="btn " onClick={toggleSideBar}><CiMenuBurger className="am-f40" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>


        <div id="side-bar" class={`side-bar ${isSiderBarOpen ? "show" : ""}`}>
          <button class="close-icon-menu" onClick={toggleSideBar}><RxCross2 className="am-icon" /></button>

         

          <div class="mobile-menu-main">
            <nav class="nav-main mainmenu-nav mt--30">
              <ul class="mainmenu metismenu" id="mobile-menu-active">
                <li>
                  <Link to="/" class="main">Home</Link>
                </li>
                <li class={`has-droupdown ${openDropDown===1?'mm-active':''}`} onClick={()=>setOpenDropDown(()=>openDropDown===1?0:1)}>
                  <Link href="#" class="main">About</Link>
                  <ul class={`submenu mm-collapse ${openDropDown===1?'mm-show':''}`}>
                    <li><Link class="mobile-menu-link" href="index.html">Introduction</Link></li>

                    <li><Link class="mobile-menu-link"to="vision-mission">Vision & Mission</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/institutions" class="main">Institutions</Link>
                </li>
                <li>
                  <Link to="/contact-us" class="main">Contact Us</Link>
                </li>
              </ul>
            </nav>

           
          </div>

        </div>
      </>
    </>
  );
}
export default Navbar;