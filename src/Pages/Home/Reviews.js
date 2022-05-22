import React from "react";
import "swiper/css/pagination";
// import required modules
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import person_1 from "../../assets/person_1.jpeg";
import person_2 from "../../assets/person_2.jpeg";
import person_3 from "../../assets/person_3.jpeg";

const Reviews = () => {
  return (
    <section className="w-4/5 mx-auto text-center p-10">
      <h2 className="text-3xl text-center font-bold text-white py-5">
        Clients Reviews
      </h2>
      <Swiper
        className="mySwiper"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        slidesPerView={1}
        spaceBetween={10}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className="p-10 bg-secondary">
            <p className="text-white">
              Easy install for my 2007 Audi A3 and haven't had any issues so far
              after 10k miles. This product comes coated in packing grease to
              prevent rusting. If you're new to changing out the rotors on your
              car, remember to clean off the packing grease from this product
              with brake cleaner before installation or you're going to have a
              bad time.
            </p>
            <div className="flex justify-center items-center my-5">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={person_1} alt="" />
                </div>
              </div>
              <div className="ml-5 text-white font-bold text-left">
                <h4 className="text-xl text-primary">Jenny Lofez</h4>
                <h5>USA</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10 bg-secondary">
            <p className="text-white">
              these puppies have zero lateral runout (I used a gauge). Some
              brand new are between .06 and .08 of variance which I could
              quickly feel (steering wheel vibrations) after a few thousand
              miles. They are also balanced. Top quality. Avoid the
              vented/slotted brakes.
            </p>
            <div className="flex justify-center items-center my-5">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={person_2} alt="" />
                </div>
              </div>
              <div className="ml-5 text-white font-bold text-left">
                <h4 className="text-xl text-primary">Mark Spector</h4>
                <h5>Canada</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="p-10 bg-secondary">
            <p className="text-white">
              These tires have a great rating and are cheaper than what I saw at
              Walmart or America's Tires. I got them installed at Walmart and
              purchased the lifetime rotation/balance. Much cheaper than buying
              and installing at American's Tires. Love amazon for their cheap
              tire prices! The tires ride really nicely.
            </p>
            <div className="flex justify-center items-center my-5">
              <div className="avatar">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={person_3} alt="" />
                </div>
              </div>
              <div className="ml-5 text-white font-bold text-left">
                <h4 className="text-xl text-primary">Jenny Lofez</h4>
                <h5>USA</h5>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Reviews;
