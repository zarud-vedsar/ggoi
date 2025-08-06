import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa";
import { AiOutlineYoutube } from "react-icons/ai";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import banner1 from "../../Components/Website/assets/images/logo/banner/banner-1.jpeg";
import banner2 from "../../Components/Website/assets/images/logo/banner/banner2.jpeg";
import banner3 from "../../Components/Website/assets/images/logo/banner/banner3.jpeg";
import "../../Components/Website/assets/css/home.css";
import { FaArrowRight } from "react-icons/fa6";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { FaUniversity } from "react-icons/fa";
import OurProgram from './OurProgram';
import InstitutesList from './InstitutesList';
import CampusFacilities from './CampusFacilities';
import PersonalityDevelopment from './PersonalityDevelopment';

function Home() {
  return (
    <>
  {/* banner area */}
  <div className="banner v__5">
    <div className="banner__left__side__content">
      <div className="banner__left__side__content__social">
        <span>Follow-</span>
        <a href="#" className='doz-home-ico1'>
          <FaFacebookF style={{fontSize: "25px", color: "#fff"}}/>
        </a>
        <a href="#" className='doz-home-ico2'>
          <FaInstagram style={{fontSize: "25px", color: "#fff"}}/>
        </a>
        <a href="#" className='doz-home-ico3'>
          <FaLinkedinIn style={{fontSize: "25px", color: "#fff"}}/>
        </a>
        <a href="#" className='doz-home-ico4'>
          <AiOutlineYoutube style={{fontSize: "25px", color: "#fff"}}/>
        </a>
      </div>
      <div className="banner__left__side__content__hour">
        {/* <span className="time">10:30 AM - 02:45 pM</span>
        <span className="day">mON - fRI</span> */}
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <div className="banner__content">
              <div className="banner__content__top">
                <div className="banner__content__left">
                  <h5 className="banner__sub__heading">
                    <HiOutlineAcademicCap style={{fontSize: "50px"}}/>
                    Welcome to Ghanshyam Group of Institutions
                  </h5>
                  <h1 className="banner__heading__title">
                    Affiliated to AKTU, BTE & Allahabad State University Approved by AICTE, PCI, New Delhi
                  </h1>
                </div>
                <div className="banner__content__right">
                  <p className="banner__description__text">
                   Welcome to Ghanshyam Group of Institutions, Prayagraj – a leading educational trust dedicated to providing world-class education in rural and semi-urban regions of Uttar Pradesh. With over 10,000+ students, 9 campuses, and 850+ dedicated faculty, our mission is to nurture socially responsible and industry-ready professionals.
                  </p>
                  <a
                    href="program-single.html"
                    className="rts-nbg-btn btn-arrow"
                  >
                    View Our Program
                    <span>
                      <FaArrowRight style={{fontSize: "20px"}}/>
                    </span>
                  </a>
                </div>
              </div>
              <div className="banner__content__bottom">
                <div className="banner__content__bottom__left">
                  <div className="rts__circle v__3">
                    <svg className="spinner doz-ico-svg" viewBox="0 0 100 100">
                      <defs>
                        <path
                          id="circle"
                          d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle">
                          Ghanshyam Group of Institutions, Prayagraj
                        </textPath>
                      </text>
                    </svg>
                    <div className="circle-icon-wrapper">
                      <FaUniversity style={{color: "#890C25", fontSize: "30px"}}/>
                    </div>
                  </div>
                </div>
                <div className="banner__content__bottom__right o-hidden">
                  <Swiper
                    modules={[Navigation, Autoplay, EffectFade]}
                    slidesPerView={1}
                    effect="fade"
                    loop={true}
                    speed={1000}
                    autoplay={{ delay: 7000 }}
                    navigation={{
                      nextEl: '.rts__next',
                      prevEl: '.rts__prev',
                    }}
                    className="swiper-data"
                  >
                    <SwiperSlide>
                      <div className="banner__content__slide__item">
                        <img src={banner1} alt="Banner Slide 1" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="banner__content__slide__item">
                        <img src={banner2} alt="Banner Slide 2" />
                      </div>
                    </SwiperSlide>

                    <SwiperSlide>
                      <div className="banner__content__slide__item">
                        <img src={banner3} alt="Banner Slide 3" />
                      </div>
                    </SwiperSlide>
                  </Swiper>

                  {/* Navigation buttons */}
                  <div className="rts__prev doz-pre-banner">
                    <IoIosArrowBack style={{fontSize: "35px", color: "#890C25"}}/>
                  </div>
                  <div className="rts__next doz-next-banner">
                   <IoIosArrowForward style={{fontSize: "35px", color: "#890C25"}}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  {/* banner area end */}
  <OurProgram />
  <InstitutesList />
  <CampusFacilities/>
  <PersonalityDevelopment/>
 </>
  )
}

export default Home;