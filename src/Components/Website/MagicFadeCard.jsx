import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import '../Website/assets/css/magic-fade-card.css';
import { useEffect, useRef } from "react";
const MagicFadeCard = ({ images, delay=0 }) => {
    const swiperRef = useRef();
    useEffect(() => {
        const timer = setTimeout(() => {
            if (swiperRef.current && swiperRef.current?.swiper) {
                swiperRef.current?.swiper.autoplay.start();
            }
        }, delay);
        return () => clearTimeout(timer);
    }, [])
    return (
        <div className="magic-card">
            <Swiper
                ref={swiperRef}
                modules={[Autoplay, EffectFade]}
                effect="fade"
                loop={true}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                allowTouchMove={false}
                speed={1500}
                onSwiper={(swiper) => swiper.autoplay.stop()}
            >
                {images.map((src, index) => (
                    <SwiperSlide key={index}>
                        <img src={src} className="shoe-img" alt={`shoe-${index}`} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default MagicFadeCard;