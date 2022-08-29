import React from "react";
import banner from "../../assets/Group 7083.png";
import banner1 from "../../assets/banner.jpg";

const Bannar = () => {
  return (
    <section className="border-b-8 mb-4 border-gray-700">
      <section
        className="flex justify-between items-center"
        style={{ background: `url(${banner1})`, backgroundSize: "cover" }}
      >
        <div className="text-left ">
          <p className="">Home / Delhi NCR / Home Cleaning</p>
          <h2 className="text-5xl text-white">
            Top House Cleaning Services in Delhi NCR
          </h2>
        </div>
        <div className="m-12 w-[559px] h-[381px]">
          <div class="card w-96 bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <select class="select input-bordered w-full max-w-xs">
                <option disabled selected>
                  Select Pest Control-Options
                </option>
                <option>Homer</option>
                <option>Marge</option>
                <option>Bart</option>
                <option>Lisa</option>
                <option>Maggie</option>
              </select>

              <div className="flex gap-2">
                <input
                  className=""
                  type="text"
                  placeholder="Enter Name"
                  class="input input-bordered w-full max-w-xs "
                />
                <input
                  type="text"
                  placeholder="Phone Number"
                  class="input input-bordered w-full max-w-xs "
                />
              </div>
              <input
                type="text"
                placeholder="Pincode or Address"
                class="input input-bordered w-full max-w-xs"
              />
              <button className="btn btn-sm m-5">Submit</button>
              <p className="text-xs">
                Average call back time : 12 min (Last update 5 mins ago)
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="my-20 mx-[357px] ">
        <h2 className="font-bold">House Cleaning Services in Delhi NCR :</h2>
        <p>
          Get home cleaning services in Delhi NCR, India. We have Well Equipped
          and Trained Team, who carries out Deep House Cleaning and Sanitization
          with Non-Hazardous Chemicals. Book well-trained and experienced team
          from OyeBusy to get your home deep cleaned thoroughly at your chosen
          time and location. We offer the most affordable home cleaning services
          in Delhi NCR, India for studios, apartments, and villas. Book home
          cleaning services on OyeBusy today.
        </p>
      </div>
    </section>
  );
};

export default Bannar;
