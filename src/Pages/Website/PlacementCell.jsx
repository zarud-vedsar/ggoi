import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import '../../Components/Website/assets/css/placement-cell.css';


const PlacementCell = () => {
    return (
        <section className="pt-5 placement-cell-section" >
            <div className="container">
                <div className="row mb-4">
                    <div className="col-md-12" data-aos="fade-up" data-aos-delay="200">
                        <h2 className="mb-6 text-white" >Top Recruiters</h2>

                    </div>

                </div>
                <div className="row ">
                    <div className="col-md-6 position-relative high-package-campus-placement">
                        <div className="highestPackage pillar pt-5">
                            <p className="text-center title am-f25 mb-0 text-white">20 LPA</p>
                            <p className="text-center label text-white">Highest Package</p>
                            <img src="website/img/high-package.svg" alt="" className="mx-auto" />
                        </div>
                        <div className="numberOfPlacement pillar pt-5">
                            <p className="text-center title am-f25 mb-0 text-white">2000+</p>
                            <p className="text-center label text-white">Campus Placement</p>
                            <img src="website/img/campus-placement.svg" alt="" className="mx-auto" />
                        </div>
                    </div>
                    <div className="col-md-6 swiper" data-aos="fade-up" data-aos-delay="300">
                        <div className="  ">
                            <Swiper
                                autoplay={{
                                    delay: 1800,
                                    disableOnInteraction: false,
                                }}
                                Pagination={{ clickable: true }}

                                loop={true}
                                grabCursor={true}
                                modules={[Autoplay, Pagination]}
                                pagination={{ clickable: true }}
                            >

                                <SwiperSlide >
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/wipro.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/infosys.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/tcs.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/landt.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/glenmark.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/alkem.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/lupin.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/havells.png" alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                                <SwiperSlide >
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/jio.png" alt="" />
                                            </div>
                                        </div>
                                        <div className="col-6">
                                            <div className="am-card">
                                                <img src="website/img/indian-army.png" alt="" />
                                            </div>
                                        </div>
                                    </div>

                                </SwiperSlide>

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default PlacementCell