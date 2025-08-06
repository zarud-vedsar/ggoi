import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation } from "swiper/modules";
import '../../Components/Website/assets/css/home-gallery.css';

const logos = [
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam College of Engineering" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam College of Pharmacy" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam Industrial Training Institute" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam College of Management & Technology" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam College of Engineering" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam College of Pharmacy" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam Industrial Training Institute" },
    { img: 'website/img/collegeImg.jpg', link: "", name: "Ghanshyam College of Management & Technology" },


];

const HomePageGallery = () => {
    return (
        <section className="py-5 home-gallery-section" style={{ background: '#890c25' }} >
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mb-5 text-white" data-aos="fade-up" data-aos-delay="200">Gallery</h2>
                    </div>
                    <div className="col-12 swiper" data-aos="fade-up" data-aos-delay="300">
                        <div className="pb-5  bg-transparent">
                            <Swiper
                                  autoplay={{
                                    delay: 1800,
                                    disableOnInteraction: false,
                                  }}
                                loop={true}
                                grabCursor={true}
                                modules={[Autoplay, Navigation]}
                                navigation={true}
                                breakpoints={{
                                    320: { slidesPerView: 1 },
                                    640: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    992: { slidesPerView: 4 },
                                }}
                            >
                                {logos.map((logo, index) => (
                                    <SwiperSlide key={index}>
                                        <a
                                            href={logo.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ display: "block", width: "100%" }}
                                        >
                                            <div className="swiper-card">
                                                <img
                                                    src={logo.img}
                                                    alt={`Logo ${index + 1}`}
                                                    className="object-contain"
                                                />
                                                <p className="college-name mt-3 am-f22 text-white">{logo?.name}</p>

                                            </div>
                                        </a>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}

export default HomePageGallery