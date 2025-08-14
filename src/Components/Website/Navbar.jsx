import React, { useEffect, useState } from "react";
import logo from "./assets/images/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import TopHeader from "./TopHeader";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);
  const [openDropDown, setOpenDropDown] = useState(0);
  const { pathname } = useLocation();
  useEffect(() => {
    setIsSideBarOpen(false);
  }, [pathname])
  const toggleSideBar = () => {
    setOpenDropDown(0)
    setIsSideBarOpen(() => !isSideBarOpen);
  }
  const [isScrolled, setIsScrolled] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const closeSideBarMenu = (e) => {
      if (!e.target.closest(".side-bar") && !e.target.closest(".am-menu-btn")) setIsSideBarOpen(false);
    };
    document.addEventListener("click", closeSideBarMenu);
    return () => document.removeEventListener("click", closeSideBarMenu);
  }, []);
  return (
    <>
      <>
        {/* header area start */}
        <TopHeader />
        <header className={`header v__5  header__sticky ${isScrolled ? "fixed" : ""}`}>
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
                              to='/contact-us'
                              className="navigation__menu--item__link"
                            >
                              Contact Us
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                  <div className="d-inline d-lg-none am-menu-btn">
                    <button className="btn " onClick={toggleSideBar}><AiOutlineMenu className="am-f40" /></button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>


        <div id="side-bar" class={`side-bar ${isSideBarOpen ? "show" : ""}`}>
          <button class="close-icon-menu" onClick={toggleSideBar}><RxCross2 className="am-icon" /></button>



          <div class="mobile-menu-main">
            <nav class="nav-main mainmenu-nav mt--30">
              <ul class="mainmenu metismenu" id="mobile-menu-active">
                <li>
                  <Link to="/" class="main">Home</Link>
                </li>
                <li class={`has-droupdown ${openDropDown === 1 ? 'mm-active' : ''}`} onClick={() => setOpenDropDown(() => openDropDown === 1 ? 0 : 1)}>
                  <Link href="#" class="main">About</Link>
                  <ul class={`submenu mm-collapse ${openDropDown === 1 ? 'mm-show' : ''}`}>
                    <li><Link class="mobile-menu-link" to="/about-us">Introduction</Link></li>

                    <li><Link class="mobile-menu-link" to="/vision-mission">Vision & Mission</Link></li>

                    <li><Link class="mobile-menu-link" to="/messages">About Content Message</Link></li>
                  </ul>
                </li>
                <li>
                  <Link to="/#institution" class="main">Institutions</Link>
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