import React from 'react'

function Home() {
  return (
    <>
    <>
  {/* banner area */}
  <div className="banner v__5">
    <div className="banner__left__side__content">
      <div className="banner__left__side__content__social">
        <span>Follow-</span>
        <a href="#">
          <i className="fa-brands fa-facebook" />
        </a>
        <a href="#">
          <i className="fa-brands fa-instagram" />
        </a>
        <a href="#">
          <i className="fa-brands fa-linkedin" />
        </a>
        <a href="#">
          <i className="fa-brands fa-youtube" />
        </a>
      </div>
      <div className="banner__left__side__content__hour">
        <span className="time">10:30 AM - 02:45 pM</span>
        <span className="day">mON - fRI</span>
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
                    <img src="assets/images/icon/e-cap-small.svg" alt="" />{" "}
                    knowledge meets innovation
                  </h5>
                  <h1 className="banner__heading__title">
                    Empowering Rural India Through Quality Education Since 2002
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
                      <i className="fa-sharp fa-regular fa-arrow-right" />
                    </span>
                  </a>
                </div>
              </div>
              <div className="banner__content__bottom">
                <div className="banner__content__bottom__left">
                  <div className="rts__circle v__3">
                    <svg className="spinner" viewBox="0 0 100 100">
                      <defs>
                        <path
                          id="circle"
                          d="M50,50 m-37,0a37,37 0 1,1 74,0a37,37 0 1,1 -74,0"
                        />
                      </defs>
                      <text>
                        <textPath xlinkHref="#circle">
                          Unipix University * Estd. 1971 * Explore Future *
                        </textPath>
                      </text>
                    </svg>
                    <div className="rts__circle--icon save-from-hidden">
                      <a
                        href="https://www.youtube.com/watch?v=7ahgosTZJHg"
                        className="video-play  rts-video-btn popup-video"
                      >
                        <i className="fa-sharp fa-solid fa-play" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="banner__content__bottom__right o-hidden">
                  <div
                    className="swiper  swiper-data"
                    data-swiper='{
                                      "slidesPerView":1,
                                      "effect": "fade",
                                      "loop": true,
                                      "speed": 1000,
                                      "navigation":{
                                          "nextEl":".rts__next",
                                          "prevEl":".rts__prev"
                                      },
                                      "autoplay":{
                                          "delay":"7000"
                                      }}'
                  >
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="banner__content__slide__item">
                          <img
                            src="assets/images/banner/slider__5.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="banner__content__slide__item">
                          <img
                            src="assets/images/banner/slider__5-2.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="banner__content__slide__item">
                          <img
                            src="assets/images/banner/slider__5-3.jpg"
                            alt=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="rts__slider--arrow v__2">
      <div className="slider__btn rts__prev">
        <i className="fa-light fa-arrow-left" />
      </div>
      <div className="slider__btn rts__next">
        <i className="fa-light fa-arrow-right" />
      </div>
    </div>
  </div>
  {/* banner area end */}
</>

    </>
  )
}

export default Home