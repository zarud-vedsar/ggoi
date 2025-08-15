import React from 'react'
import logo from './assets/images/logo/logo.png';
import './assets/css/footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
const Footer = () => {
    return (
        <>
            <footer className="footer-section black-bg-color">
                <div className="container">
                    <div className="row pt-70 pb-70 justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget bg-f9f5f1 p-0">
                                <Link to="/" className="logo">
                                    <img src={logo} alt="Image" className="bg-white rounded p-1" style={{ height: "100px" }} />
                                </Link>

                                <p>Ghanshyam Urvashi Postgraduate College, Prayagraj, established in 2002, is a leading educational institution under Urvashi Ghanshyam Technological Research and Development Charitable Trust.</p>

                                <ul className="social-icon">
                                    <li>
                                        <span>Follow us:</span>
                                    </li>
                                    <li><a href="https://www.instagram.com/ghanshyamgroup/" target='_blank' className="rs-c-instagram-b"><FaInstagram />
                                    </a></li>
                                    <li><a href="https://www.facebook.com/share/CGPErdSEJVMSmGN1/?mibextid=qi2Omg" target='_blank'  className="facebook-bg"><FaFacebook />
                                    </a></li>
                                    <li><a href="https://www.youtube.com/@ghanshyamurvaship.g.colleg8403" target='_blank'  className="rs-c-youtube-b"><FaYoutube />
                                    </a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Main Links</h3>

                                <ul className="import-link">
                                    <li>
                                        <Link to="/">Home</Link>
                                    </li>
                                   
                                    <li>
                                        <HashLink to="/messages#main-content">Founder Message</HashLink>
                                    </li>
                                    <li>
                                        <HashLink to="/messages#message-manager">Manager Message</HashLink>
                                    </li>
                                    <li>
                                        <HashLink to="/messages#message-director">Director Message</HashLink>
                                    </li>
                                  
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Other Links</h3>

                                <ul className="import-link">
                                    <li>
                                        <Link to="/contact-us">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/terms-and-conditions">Terms &amp; conditions</Link>
                                    </li>
                                    <li>
                                        <Link to="/privacy-policy">Privacy policy</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Contact Us</h3>
                                <ul className="address">
                                    <li className="location">
                                        <FaMapMarkerAlt className='me-3 icon'/>
                                        <span>Address</span>
                                        Phoolpur, Prayagraj, Boodae, Uttar Pradesh 211002						</li>
                                    <li>
                                        <FaEnvelope className='me-3 icon'/>
                                        <span>Email</span>
                                        <a href="mailto:ghanshyamurvashi@gmail.com"><span className="__cf_email__">ghanshyamurvashi@gmail.com</span></a>
                                    </li>

                                    <li>
                                      <FaPhone className='me-3 icon' />

                                        <span>Phone</span>
                                        <a href="tel:+918924057222">+918924057222</a>
                                        <br />
                                        <a href="tel:+919621925222">+919621925222</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="copy-right-area">
                <div className="container">
                    <p className='text-white'>© 2025 Ghanshyam Group of Institutions. Developed by <a href="https://vedsar.com/" target="_blank" rel="noopener noreferrer">Vedsar India Pvt. Ltd.</a></p>
                </div>
            </div>
        </>
    )
}

export default Footer