import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import '../../Components/Website/assets/css/institutes-list.css';
import { collegeData } from "../../Components/Website/CollegeData";

import arrowIcon from '../../Components/Website/assets/img/arrow.svg';
import { FaArrowRight } from "react-icons/fa6";

const InstitutesList = () => {
    const [modifyCursor, setModifyCursor] = useState(false);
    const [pos, setPos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const moveHandler = e => {
            setPos({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", moveHandler);
        return () => window.removeEventListener("mousemove", moveHandler);
    }, []);

    return (
        <section
            className="py-5 institutes-section"
            id="institution"
            style={{ backgroundColor: "#f5f5f5" }}
            onMouseEnter={() => setModifyCursor(true)}
            onMouseLeave={() => setModifyCursor(false)}
        >
            <div className="container">
                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5 text-dark text-center">Institutes Under Ghanshyam Group</h2>
                    </div>

                    {Object.values(collegeData).map((logo, index) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-5" key={index} data-aos="fade-up" data-aos-delay="200">
                            <Link to={`/college/${logo?.id}`}>

                                <div className="am-card h-100 pb-4">
                                    <div className="image-wrapper">
                                        <img
                                            src={logo.img}
                                            alt={`Logo ${index + 1}`}
                                            className="object-contain mx-auto m-0 p-0"
                                        />
                                        <div className="view-more-btn d-flex align-items-center justify-content-center">
                                            
                                             <p className="am-f18 mb-0" style={{color:"#ffff5c"}}>  View More</p> 
                                          <FaArrowRight className="ms-2" style={{color:"#ffff5c"}}/>

                                        </div>
                                    </div>

                                    <p className="mb-1 college-name text-start am-f17 text-dark m-0 px-4">{logo?.name}</p>
                                    <p className="text-start doz-instuted m-0 px-4">{logo?.address}</p>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {modifyCursor && (
                <div
                    className="cursor-circle d-none d-md-block"
                    style={{
                        left: `${pos.x}px`,
                        top: `${pos.y}px`
                    }}
                />
            )}
        </section>
    );
};

export default InstitutesList;
