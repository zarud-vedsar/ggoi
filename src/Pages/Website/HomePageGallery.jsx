import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation ,Autoplay} from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

import LightGallery from "lightgallery/react";

// LightGallery Styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-autoplay.css";
import "lightgallery/css/lg-fullscreen.css";
import "lightgallery/css/lg-share.css";
import "lightgallery/css/lg-video.css";
import "lightgallery/css/lg-pager.css";

// LightGallery Plugins
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import lgAutoplay from "lightgallery/plugins/autoplay";
import lgFullscreen from "lightgallery/plugins/fullscreen";
import lgShare from "lightgallery/plugins/share";
import lgVideo from "lightgallery/plugins/video";
import lgPager from "lightgallery/plugins/pager";

// Styles
import "../../Components/Website/assets/css/home-gallery.css";

const galleryImage = [
    "/website/homeGallery/img1.jpg", "/website/homeGallery/img2.jpg", "/website/homeGallery/img3.jpg",
    "/website/homeGallery/img4.jpg", "/website/homeGallery/img5.jpg", "/website/homeGallery/img6.jpg",
    "/website/homeGallery/img7.jpg", "/website/homeGallery/img8.jpg", "/website/homeGallery/img9.jpg",
    "/website/homeGallery/img10.jpg", "/website/homeGallery/img11.jpg", "/website/homeGallery/img12.jpg",
    "/website/homeGallery/img13.jpg", "/website/homeGallery/img14.jpg", "/website/homeGallery/img15.jpg",
    "/website/homeGallery/img16.jpg", "/website/homeGallery/img17.jpg", "/website/homeGallery/img18.jpg",
    "/website/homeGallery/img19.jpg", "/website/homeGallery/img20.jpg"
];

const HomePageGallery = () => {
    const lightGalleryRef = useRef(null);

    const handleImageClick = (index) => {
        if (lightGalleryRef.current) {
            lightGalleryRef.current.openGallery(index);
        }
    };

    return (
        <section className="py-5 home-gallery-section" style={{ backgroundColor: "#f5f5f5" }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <h2 className="mb-5 text-center" data-aos="fade-up" data-aos-delay="200">Gallery</h2>
                    </div>
                    <div className="col-12" data-aos="fade-up" data-aos-delay="300">
                        <div className="pb-5 bg-transparent">
                            <Swiper
                              autoplay={{
                                    delay: 1800,
                                    disableOnInteraction: false,
                                }}
                                modules={[Navigation,Autoplay]}
                                spaceBetween={10}
                                navigation
                                breakpoints={{
                                    0: { slidesPerView: 2 },
                                    576: { slidesPerView: 2 },
                                    768: { slidesPerView: 3 },
                                    992: { slidesPerView: 5 },
                                }}
                            >
                                {galleryImage.map((src, index) => (
                                    <SwiperSlide key={index}>
                                        <div
                                            onClick={() => handleImageClick(index)}
                                            role="button"
                                            tabIndex={0}
                                            className="d-block col-6 col-sm-4 col-md-3 col-lg-2 mb-2 img-anchor"
                                            style={{ width: "100%", cursor: "pointer" }}
                                            onKeyPress={(e) => {
                                                if (e.key === 'Enter') handleImageClick(index);
                                            }}
                                        >
                                            <img
                                                src={src}
                                                loading="lazy"
                                                alt={`Gallery Image ${index + 1}`}
                                                className="img-fluid"
                                                style={{ borderRadius: "10px",height:"200px",width:"100%" }}
                                            />
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                            <LightGallery
                                onInit={(ref) => {
                                    lightGalleryRef.current = ref.instance;
                                }}
                                dynamic
                                dynamicEl={galleryImage.map((src) => ({
                                    src: src,
                                    thumb: src,
                                }))}
                                plugins={[
                                    lgThumbnail,
                                    lgZoom,
                                    lgAutoplay,
                                    lgFullscreen,
                                    lgShare,
                                    lgVideo,
                                    lgPager,
                                ]}
                                closable
                                hideBarsDelay={0}
                                speed={500}
                                mobileSettings={{
                                    controls: true,
                                    showCloseButton: true,
                                }}
                                className="d-none"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HomePageGallery;
