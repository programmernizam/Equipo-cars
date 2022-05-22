import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Autoplay } from "swiper";
// Slider Img
import slider_1 from "../../assets/home_slider/slide_img_1.jpeg";
import slider_2 from "../../assets/home_slider/slide_img_2.jpeg";
import slider_3 from "../../assets/home_slider/slide_img_3.jpeg";

const Banner = () => {
  return (
    <section>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
        loop={true}
      >
        <SwiperSlide>
          <img src={slider_1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider_3} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Banner;
