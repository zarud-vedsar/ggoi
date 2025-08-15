import React, { useEffect, useState } from "react";
import logo from "./assets/images/logo/logo.png";
import { Link, useLocation } from "react-router-dom";
import TopHeader from "./TopHeader";
import { CiMenuBurger } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { AiOutlineMenu } from "react-icons/ai";
import { HashLink } from 'react-router-hash-link';

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
                                <Link to="/vision-mission">Vision & Mission</Link>
                              </li>
                              <li>
                                <Link to="/messages"> Messages</Link>
                              </li>
                            </ul>
                          </li>
                          <li className="navigation__menu--item">
                            <HashLink
                              to='/#institution'
                              className="navigation__menu--item__link"
                            >
                              Institutions
                            </HashLink>
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


        <div id="side-bar" className={`side-bar ${isSideBarOpen ? "show" : ""}`}>
          <button className="close-icon-menu" onClick={toggleSideBar}><RxCross2 className="am-icon" /></button>



          <div className="mobile-menu-main">
            <nav className="nav-main mainmenu-nav mt--30">
              <ul className="mainmenu metismenu" id="mobile-menu-active">
                <li>
                  <Link to="/" className="main">Home</Link>
                </li>
                <li className={`has-droupdown ${openDropDown === 1 ? 'mm-active' : ''}`} onClick={() => setOpenDropDown(() => openDropDown === 1 ? 0 : 1)}>
                  <Link href="#" className="main">About</Link>
                  <ul className={`submenu mm-collapse ${openDropDown === 1 ? 'mm-show' : ''}`}>
                    <li><Link className="mobile-menu-link" to="/about-us">Introduction</Link></li>

                    <li><Link className="mobile-menu-link" to="/vision-mission">Vision & Mission</Link></li>

                    <li><Link className="mobile-menu-link" to="/messages">Messages</Link></li>
                  </ul>
                </li>
                <li>
                  <HashLink to="/#institution" className="main">Institutions</HashLink>
                </li>
                <li>
                  <Link to="/contact-us" className="main">Contact Us</Link>
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