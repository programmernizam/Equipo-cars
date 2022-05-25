import React from "react";
import SummaryCard from "./SummaryCard";
import { FaFlag, FaUsers, FaShip, FaStar } from "react-icons/fa";
import CountUp from "react-countup";

const BusinessSummary = () => {
  return (
    <section className="p-5">
      <h2 className="text-3xl font-bold text-white text-center py-10">
        WHY WITH US
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <SummaryCard
          icon={<FaFlag className="text-primary text-6xl" />}
          title={<CountUp duration={5} end={100} />}
          text={"Countries"}
        />
        <SummaryCard
          icon={<FaUsers className="text-primary text-6xl" />}
          title={<CountUp duration={5} end={1500} />}
          text={"Happy Clients"}
        />
        <SummaryCard
          icon={<FaShip className="text-primary text-6xl" />}
          title={<CountUp duration={5} end={10000} />}
          text={"Delivery Completed"}
        />
        <SummaryCard
          icon={<FaStar className="text-primary text-6xl" />}
          title={<CountUp duration={5} end={8999} />}
          text={"Clients Reviews"}
        />
      </div>
    </section>
  );
};

export default BusinessSummary;
