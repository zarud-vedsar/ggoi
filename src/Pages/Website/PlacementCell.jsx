import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import '../../Components/Website/assets/css/placement-cell.css';

import highPackage from '../../Components/Website/assets/img/high-package.svg';
import campusPlacement from '../../Components/Website/assets/img/campus-placement.svg';

import wipro from '../../Components/Website/assets/img/wipro.png';
import infosys from '../../Components/Website/assets/img/infosys.png';
import tcs from '../../Components/Website/assets/img/tcs.png';
import landt from '../../Components/Website/assets/img/landt.png';
import glenmark from '../../Components/Website/assets/img/glenmark.png';
import alkem from '../../Components/Website/assets/img/alkem.png';
import lupin from '../../Components/Website/assets/img/lupin.png';
import havells from '../../Components/Website/assets/img/havells.png';
import jio from '../../Components/Website/assets/img/jio.png';
import indianArmy from '../../Components/Website/assets/img/indian-army.png';

const PlacementCell = () => {
    return (
        <section className="pt-5 placement-cell-section">
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-6 text-white text-center section-heading ">Top Recruiters</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 position-relative high-package-campus-placement">
                        <div className="highestPackage pillar pt-5">
                            <p className="text-center title am-f28 mb-0 text-white">8 LPA</p>
                            <p className="text-center label text-white">Highest Package</p>
                            <img src={highPackage} alt="Highest Package" className="mx-auto" />
                        </div>
                        <div className="numberOfPlacement pillar pt-5">
                            <p className="text-center title am-f28 mb-0 text-white">2000+</p>
                            <p className="text-center label text-white">Campus Placement</p>
                            <img src={campusPlacement} alt="Campus Placement" className="mx-auto" />
                        </div>
                    </div>
                    <div className="col-md-6 swiper" data-aos="fade-up" data-aos-delay="300">
                        <Swiper
                            autoplay={{
                                delay: 1800,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            grabCursor={true}
                            modules={[Autoplay, Pagination]}
                            pagination={{ clickable: true }}
                        >
                            {/* Slide 1 */}
                            <SwiperSlide>
                                <div className="row mb-4">
                                    <div className="col-6"><div className="am-card"><img src={wipro} alt="Wipro" /></div></div>
                                    <div className="col-6"><div className="am-card"><img src={infosys} alt="Infosys" /></div></div>
                                </div>
                                <div className="row">
                                    <div className="col-6"><div className="am-card"><img src={tcs} alt="TCS" /></div></div>
                                    <div className="col-6"><div className="am-card"><img src={landt} alt="L&T" /></div></div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 2 */}
                            <SwiperSlide>
                                <div className="row mb-4">
                                    <div className="col-6"><div className="am-card"><img src={glenmark} alt="Glenmark" /></div></div>
                                    <div className="col-6"><div className="am-card"><img src={alkem} alt="Alkem" /></div></div>
                                </div>
                                <div className="row">
                                    <div className="col-6"><div className="am-card"><img src={lupin} alt="Lupin" /></div></div>
                                    <div className="col-6"><div className="am-card"><img src={havells} alt="Havells" /></div></div>
                                </div>
                            </SwiperSlide>

                            {/* Slide 3 */}
                            <SwiperSlide>
                                <div className="row mb-4">
                                    <div className="col-6"><div className="am-card"><img src={jio} alt="Jio" /></div></div>
                                    <div className="col-6"><div className="am-card"><img src={indianArmy} alt="Indian Army" /></div></div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </section>
    );
};


export default PlacementCell