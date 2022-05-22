import React from "react";
import service_bg from "../../assets/service_bg.webp";
import ServiceCard from "./ServiceCard";
import { FaShippingFast, FaPhoneAlt, FaGift } from "react-icons/fa";

const Services = () => {
  return (
    <section
      style={{ backgroundImage: `url(${service_bg})` }}
      className="p-5 min-h-[400px] py-20 bg-no-repeat bg-cover bg-fixed"
    >
      <div>
        <h2 className="text-3xl font-bold text-white text-center">
          Our Services
        </h2>
        <div className="py-5 grid grid-cols-1 md:grid-cols-3 gap-5">
          <ServiceCard
            img={<FaShippingFast className="text-sm text-white p-5" />}
            serviceBg={"bg-primary"}
            title={'FREE DELIVERY'}
            text={'Worldwide from $75'}
          />
          <ServiceCard
            img={<FaPhoneAlt className="text-sm text-white p-5" />}
            serviceBg={"bg-primary"}
            title={'SUPPORT 24/7'}
            text={'Call : (123) 236 757 914'}
          />
          <ServiceCard
            img={<FaGift className="text-sm text-white p-5" />}
            serviceBg={"bg-primary"}
            title={'FREE GIFTS'}
            text={'Get gifts and discounts'}
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
