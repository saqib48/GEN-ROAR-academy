import React from "react";
import CustomImage from "../Atoms/CustomImage";
import Heading from "../Atoms/Headings";
import { FaArrowRight } from "react-icons/fa";
import button from "../Atoms/Button";

function About() {
  return (
    <div className="container flex gap-[40px] ">
      <div className="w-[50%]" data-aos="fade-up">
        <CustomImage
          src="assets/image/about.jpg"
          alt="Product Image"
          variant="second"
        />
      </div>
      <div className="flex flex-col gap-[15px] w-[50%]" data-aos="fade-right" >
        <Heading
          children="About us"
          className="text-2xl font-bold text-[rgb(6,187,204)]"
        />
        <Heading
          children="Welcome to GenRoar Academy"
          className="text-5xl font-normal text-[black]"
        />
        <p>
          Welcome to GenRoar Academy where learning knows no limits. Offering a
          fusion of online and physical classes, we empower learners to thrive
          in any environment. With top-notch instructors and a supportive
          community, your educational journey starts here. Join us and unlock
          your full potential!
        </p>
        <p>
          Learn from anywhere with our online classes. Expert instruction,
          anytime access. Enroll now!
        </p>

        <div className="flex justify-between pr-[30px]">
          <div className="flex flex-col gap-[25px]">
            <Heading children="Skilled Instructors" icon={<FaArrowRight />} className='flex items-center gap-[5px]' />
            <Heading children="Skilled Instructors" icon={<FaArrowRight />} className='flex items-center gap-[5px]' />
            <Heading children="Skilled Instructors" icon={<FaArrowRight />} className='flex items-center gap-[5px]' />
          </div>
          <div className="flex flex-col gap-[25px]">
            <Heading children="Skilled Instructors" icon={<FaArrowRight />} className='flex items-center gap-[5px]' />
            <Heading children="Skilled Instructors" icon={<FaArrowRight />} className='flex items-center gap-[5px]' />
            <Heading children="Skilled Instructors" icon={<FaArrowRight />} className='flex items-center gap-[5px]'/>
          </div>
        </div>
        <div className="pt-[4px]">
            <button
            className="bg-[rgb(6,187,204)] text-white px-[25px] py-[18px] rounded"
            children="Read More"
            />
        </div>
      </div>
    </div>
  );
}

export default About;
