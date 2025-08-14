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
import HomePageGallery from './HomePageGallery';
import EventsAndExtraCurriculars from './EventsAndExtraCurriculars';
import PlacementCell from './PlacementCell';
import CareerExcellence from './CareerExcellence';
import AcademicsAndFaculty from './AcademicsAndFaculty';
import WelcomeNoteToNewStudent from './WelcomeNoteToNewStudent';
import Footer from '../../Components/Website/Footer';
import OurAffiliations from './OurAffiliations';
import ggoimg from '../../Components/Website/assets/images/logo/ggoi-image.jpg';

function Home() {
  return (
    <>
      {/* banner area */}
      <div className="banner v__5"  data-aos="fade-up" data-aos-delay="200" >
        <div className="banner__left__side__content">
          <div className="banner__left__side__content__social">
            <span>Follow-</span>
            <a href="#" className='doz-home-ico1'>
              <FaFacebookF style={{ fontSize: "25px", color: "#fff" }} />
            </a>
            <a href="#" className='doz-home-ico2'>
              <FaInstagram style={{ fontSize: "25px", color: "#fff" }} />
            </a>
            <a href="#" className='doz-home-ico3'>
              <FaLinkedinIn style={{ fontSize: "25px", color: "#fff" }} />
            </a>
            <a href="#" className='doz-home-ico4'>
              <AiOutlineYoutube style={{ fontSize: "25px", color: "#fff" }} />
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
                        <HiOutlineAcademicCap style={{ fontSize: "50px" }} />
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
                        href="/#main-content"
                        className="rts-nbg-btn btn-arrow"
                      >
                        View Our Program
                        <span>
                          <FaArrowRight style={{ fontSize: "20px" }} />
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
                              &nbsp;Ghanshyam Group of Institutions * Prayagraj *
                            </textPath>
                          </text>
                        </svg>
                        <div className="circle-icon-wrapper">
                          <FaUniversity style={{ color: "#890C25", fontSize: "30px" }} />
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
                        <IoIosArrowBack style={{ fontSize: "35px", color: "#890C25" }} />
                      </div>
                      <div className="rts__next doz-next-banner">
                        <IoIosArrowForward style={{ fontSize: "35px", color: "#890C25" }} />
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

        <section className="py-5 our-program-section"  style={{backgroundColor:"#f5f5f5"}} data-aos="fade-up" data-aos-delay="200">
               <div className="container doz-our-con">
                 <div className="container">
                     <div className="row">
                         <div className="col-lg-5 col-md-5 col-sm-6 col-12 mb-3">
                             <h2 className="section-heading mb-2 doz-about-head">About Ghanshyam<br/> Group of Institutions</h2>
                         </div>
                         <div className="col-lg-7 col-md-7 col-sm-6 col-12 mb-4 doz-about-para">
                             <p>For over 22 years, the Ghanshyam Group of Institutions, under the Urvashi Ghanshyam Technological Research and
                               Development Charitable Trust, has been dedicated to excellence in education. Founded in 2000 on the Prayagraj–Varanasi
                               Road, the Trust has grown into a network of over 12 schools and colleges. Guided by visionary leadership, an experienced
                                Board of Governors, and exceptional faculty, the institutions have nurtured bright, talented students who bring pride 
                                to the group. Committed to quality learning and holistic growth, the Trust works toward building a democratic,
                                 pluralistic, and secular nation—transforming education into a movement for complete illumination.</p>
                                 <div>
                                   <a
                                    href="/about-us"
                                    className="rts-nbg-btn btn-arrow"
                                  >
                                    Read More
                                    <span>
                                      <FaArrowRight style={{ fontSize: "20px" }} />
                                    </span>
                                  </a>
                                 </div>
                         </div>
                         <div className="col-12 mb-3">
                             <div className="">
                                 <img src={ggoimg}/>
                             </div>
                         </div>
                     </div>
                  </div>
               </div> 
            </section> 

      <OurProgram />
      <CareerExcellence />
      <InstitutesList />
      <OurAffiliations/>
      <CampusFacilities />
      <WelcomeNoteToNewStudent />
      <AcademicsAndFaculty />
      <PlacementCell />

      <HomePageGallery />
            <PersonalityDevelopment />

      <EventsAndExtraCurriculars />

      <Footer />
    </>
  )
}

export default Home;