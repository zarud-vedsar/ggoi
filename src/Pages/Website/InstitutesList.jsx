import React, { useEffect, useRef, useState } from "react";

import '../../Components/Website/assets/css/institutes-list.css';
import { Link } from "react-router-dom";

const logos = [
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghansyam Urvasi Law College", address: "Phoolpur, Prayagraj, Boodae, Uttar Pradesh 211002" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam Urvashi PG college", address: "Phoolpur, Prayagraj, Boodae, Uttar Pradesh 211002" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Shri Sai Ram Industrial Training  Institute", address: "962H+9GV, NH 19, Benipur Makharut, Uttar Pradesh 221502" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam Urvashi Industrial Training Institute", address: "Phoolpur, Prayagraj, Boodae, Uttar Pradesh 211002" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Shri Sai College of Pharmacy", address: "Upardaha, Handia, Uttar Pradesh 221502" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam College of Pharmacy", address: "Phoolpur, Prayagraj, Boodae, Uttar Pradesh 211002" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam Urvashi College of Pharmacy", address: "Phoolpur, Prayagraj, Boodae, Uttar Pradesh 211002" },



];

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
        <section className="py-5 institutes-section " onMouseEnter={(() => setModifyCursor(true))} onMouseLeave={(() => setModifyCursor(false))} >
            <div className="container" >
              

                <div className="row">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-5 text-dark text-center"  data-aos="fade-up" data-aos-delay="200">Institutes Under Ghanshyam Group</h2>
                    </div>


                    {logos.map((logo, index) => (
                        <div className="col-12 col-md-6 col-lg-4 am-card" key={index}  data-aos="fade-up" data-aos-delay="200">

                            <div className="am-card">
                                <div className="image-wrapper">
                                    <img
                                        src={logo.img}
                                        alt={`Logo ${index + 1}`}
                                        className="object-contain mx-auto"
                                    />
                                    <div className="View-more-btn d-block w-100">
                                        <Link to="" className="am-f23" >View More</Link>
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