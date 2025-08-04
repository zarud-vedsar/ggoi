import React from 'react'
import logo from "./assets/images/logo/logo.png";
import { Link } from 'react-router-dom';
function Navbar() {
  return (
    <>
    <>
  {/* header area start */}
  <header className="header v__5  header__sticky">
    <div className="container-fluid">
      <div className="row">
        <div className="col-xl-12">
          <div className="header__wrapper">
            <div className="header__logo">
              <Link to="/" className="header__logo--link">
                <img src={logo} alt="Ghanshyam Group of Institutions" style={{width: '140px'}} />
              </Link>
            </div>
            <div className="header__menu">
              <div className="navigation">
                <nav className="navigation__menu">
                  <ul>
                    <li className="navigation__menu--item has-child has-arrow">
                      <a
                        href="javascript:void(0);"
                        className="navigation__menu--item__link"
                      >
                        Home
                      </a>
                      <ul className="submenu sub__style">
                        <li>
                          <a href="index.html">Home Style One</a>
                        </li>
                        <li>
                          <a href="index-two.html">Home Style Two</a>
                        </li>
                        <li>
                          <a href="index-three.html">Home Style three</a>
                        </li>
                        <li>
                          <a href="index-four.html">Home Style four</a>
                        </li>
                        <li>
                          <a href="index-five.html">Home Style five</a>
                        </li>
                      </ul>
                    </li>
                    <li className="navigation__menu--item has-child has-arrow">
                      <a
                        href="javascript:void(0);"
                        className="navigation__menu--item__link"
                      >
                        Pages
                      </a>
                      <ul className="submenu sub__style">
                        <li>
                          <a href="about.html">About</a>
                        </li>
                        <li>
                          <a href="athletics.html">Athletics</a>
                        </li>
                        <li className="has-child has-arrow">
                          <a href="#">Faculty</a>
                          <ul className="sub__style">
                            <li>
                              <a
                                className="mobile-menu-link"
                                href="faculty-sub.html"
                              >
                                Faculty
                              </a>
                            </li>
                            <li>
                              <a
                                className="mobile-menu-link"
                                href="faculty-sub-details.html"
                              >
                                Faculty Details
                              </a>
                            </li>
                            <li>
                              <a href="faculty.html">Faculty Staff</a>
                            </li>
                            <li className="has-child">
                              <a href="faculty-details.html">
                                Faculty Staff details
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li>
                          <a href="research.html">Research</a>
                        </li>
                      </ul>
                    </li>
                    <li className="navigation__menu--item has-child has-arrow">
                      <a href="#" className="navigation__menu--item__link">
                        Academics
                      </a>
                      <ul className="submenu sub__style">
                        <li>
                          <a href="academic.html">Academic</a>
                        </li>
                        <li>
                          <a href="admission.html">Admission</a>
                        </li>
                        <li>
                          <a href="academic-area.html">Academic Area</a>
                        </li>
                        <li>
                          <a href="campus-life.html">Campus Life</a>
                        </li>
                        <li>
                          <a href="scholarship.html">Scholarship</a>
                        </li>
                        <li>
                          <a href="tution-fee.html">Tution Fee</a>
                        </li>
                        <li>
                          <a href="alumni.html">Alumni</a>
                        </li>
                        <li>
                          <a href="program-single.html">Program Single</a>
                        </li>
                        <li>
                          <a href="department-details.html">
                            Department Details
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="navigation__menu--item has-child has-arrow">
                      <a href="#" className="navigation__menu--item__link">
                        Event
                      </a>
                      <ul className="submenu sub__style">
                        <li>
                          <a href="event.html">Event</a>
                        </li>
                        <li>
                          <a href="event-details.html">Event Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="navigation__menu--item has-child has-arrow">
                      <a href="#" className="navigation__menu--item__link">
                        Blog
                      </a>
                      <ul className="submenu sub__style">
                        <li>
                          <a href="blog.html">Blog</a>
                        </li>
                        <li>
                          <a href="blog-grid.html">Blog Grid</a>
                        </li>
                        <li>
                          <a href="blog-list.html">Blog List</a>
                        </li>
                        <li>
                          <a href="blog-details.html">Blog Details</a>
                        </li>
                      </ul>
                    </li>
                    <li className="navigation__menu--item">
                      <a
                        href="contact.html"
                        className="navigation__menu--item__link"
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
            <div className="header__right">
              <div className="header__right--item">
                <div id="langSwitcher" className="lang__trigger">
                  <span className="selected__lang">English</span>
                  <i className="fa-light fa-globe" />
                  <div className="translate__lang">
                    <ul>
                      <li>
                        <a href="#" className="active">
                          English
                        </a>
                      </li>
                      <li>
                        <a href="#">French</a>
                      </li>
                      <li>
                        <a href="#">Spanish</a>
                      </li>
                      <li>
                        <a href="#">Romanian</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div id="search-btn" className="search__trigger">
                  <i className="fa-sharp fa-light fa-magnifying-glass" />
                </div>
                <div id="menu-btn" className="menu__trigger">
                  <img src="assets/images/icon/menu__bar-2.svg" alt="bar" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</>

    </>
  )
}

export default Navbar