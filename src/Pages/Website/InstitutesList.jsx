import React, { useEffect, useRef, useState } from "react";

import '../../Components/Website/assets/css/institutes-list.css';
import { Link } from "react-router-dom";
import { collegeData } from "../../Components/Website/CollegeData";

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
        <section className="py-5 institutes-section " style={{ backgroundColor: "#f5f5f5" }} onMouseEnter={(() => setModifyCursor(true))} onMouseLeave={(() => setModifyCursor(false))} >
            <div className="container" >


                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5 text-dark text-center" data-aos="fade-up" data-aos-delay="200">Institutes Under Ghanshyam Group</h2>
                    </div>


                    {Object.values(collegeData).map((logo, index) => (
                        <div className="col-12 col-md-6 col-lg-4 mb-5" key={index} data-aos="fade-up" data-aos-delay="200">

                            <div className="am-card h-100 ">
                                <div className="image-wrapper ">
                                    <img
                                        src={logo.img}
                                        alt={`Logo ${index + 1}`}
                                        className="object-contain mx-auto"
                                    />
                                    <div className="View-more-btn d-block w-100">
                                        <Link to={`/${logo?.id}`} className="am-f23" >View More</Link>
                                        <img src="website/img/arrow.svg" alt="" className="view-more-btn-arrow" />
                                    </div>
                                </div>
                                <p className="mb-1 college-name text-center am-f22 text-dark">{logo?.name}</p>
                                <p className="text-center">{logo?.address}</p>
                            </div>

                        </div>
                    ))}


                </div>
            </div>
            {modifyCursor &&
                <div
                    className="cursor-circle"
                    style={{
                        left: `${pos.x}px`,
                        top: `${pos.y}px`
                    }}
                >
                </div>
            }


        </section>
    )
}

export default InstitutesList