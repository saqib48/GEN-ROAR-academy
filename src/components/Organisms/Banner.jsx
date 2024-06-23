import React from "react";
import Heading from "../Atoms/Headings";
import button from "../Atoms/Button";

function Banner() {
  return (
    <div className="Back h-[100vh] w-[100%]">
      <div className="absolute inset-0 bg-blue-500 opacity-50"></div>
      <div className="container relative z-10 flex items-center h-[90vh]">
        <div className="flex-col w-[65%] space-y-4 text-white pt-[200px] ">
          <div data-aos="fade-right">
            <Heading level={1} className="text-2xl font-bold ">
              GENROAR IT SERVICES
            </Heading>
          </div>
          <div data-aos="fade-right">
            <Heading
              children="The Best Online Learning Platform"
              className="text-6xl font-bold"
            />
          </div>
          <div data-aos="fade-left">
            <Heading
              children="Unlock learning anywhere, anytime. Join our academy for dynamic online and offline classes. Dive into a world of knowledge with expert guidance. Start your journey today!"
              className="text-xl font-normal text-black"
            />
          </div>
          <div className="flex gap-[20px]" data-aos="fade-right">
            <button
              className="bg-[rgb(6,187,204)] text-white px-[30px] py-[20px] rounded"
              children="Read More"
            />
            <button
              className="bg-white text-black py-[20px] px-[30px] rounded"
              children="Join Now"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
