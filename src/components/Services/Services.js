import React from "react";
import Rectangle from "../../assets/Rectangle 2084.png";

const Services = () => {
  return (
    <section>
      <h2 className="text-3xl text-center">Choose Our Services</h2>
      <div>
        <div className="w-[175px] h-[142px] bg-slate-500">
          <img src={Rectangle} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Services;
