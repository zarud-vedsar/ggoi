import React from 'react'
import logo from './assets/images/logo/logo.png';
import './assets/css/footer.css';
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

const Footer = () => {
    return (
        <>
            <footer className="footer-section black-bg-color">
                <div className="container">
                    <div className="row pt-70 pb-70 justify-content-center">
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget bg-f9f5f1 p-0">
                                <a href="index.php" className="logo">
                                    <img src={logo} alt="Image" className="bg-white rounded p-1" style={{ height: "100px" }} />
                                </a>

                                <p>Ghanshyam Urvashi Postgraduate College, Prayagraj, established in 2002, is a leading educational institution under Urvashi Ghanshyam Technological Research and Development Charitable Trust.</p>

                                <ul className="social-icon">
                                    <li>
                                        <span>Follow us:</span>
                                    </li>
                                    <li><a href="https://www.instagram.com/ghanshyamgroup/" className="rs-c-instagram-b"><FaInstagram />
                                    </a></li>
                                    <li><a href="https://www.facebook.com/share/CGPErdSEJVMSmGN1/?mibextid=qi2Omg" className="facebook-bg"><FaFacebook />
                                    </a></li>
                                    <li><a href="https://www.youtube.com/@ghanshyamurvaship.g.colleg8403" className="rs-c-youtube-b"><FaYoutube />
                                    </a></li>

                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Main Links</h3>

                                <ul className="import-link">
                                    <li>
                                        <a href="./index.php">Home</a>
                                    </li>
                                    <li>
                                        <a href="./about.php">About College</a>
                                    </li>
                                    <li>
                                        <a href="./founder-msg.php">Founder Message</a>
                                    </li>
                                    <li>
                                        <a href="./chairman-msg.php">Chairman Message</a>
                                    </li>
                                    <li>
                                        <a href="./director-msg.php">Director Message</a>
                                    </li>
                                    <li>
                                        <a href="./principle-msg.php">Principle Message</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-lg-3 col-sm-6">
                            <div className="single-footer-widget">
                                <h3>Other Links</h3>

                                <ul className="import-link">
                                    <li>
                                        <a href="./contact.php">Contact Us</a>
                                    </li>
                                    <li>
                                        <a href="./terms-conditions.php">Terms &amp; conditions</a>
                                    </li>
                                    <li>
                                        <a href="./privacy-policy.php">Privacy policy</a>
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