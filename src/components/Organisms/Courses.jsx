import React from "react";
import Heading from "../Atoms/Headings";
import CourseCard from "../Molecules/CourseCard";
import { BsJoystick } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { IoPersonSharp } from 'react-icons/io5';

function Courses() {
  return (
    <div className="flex flex-col gap-[40px] mt-[50px]  " data-aos="fade-down-left">
      <div>
        <Heading
          children="About us"
          className="text-2xl font-bold text-[rgb(6,187,204)] justify-center items-center flex"
        />
        <Heading
          children="Popular Courses"
          className="text-3xl font-bold text-[black] justify-center items-center flex"
        />
      </div>
      <div className="container justify-between items-center flex text-center gap-[50px] " data-aos="fade-right">

       <div data-aos="fade-right">
       <CourseCard
         image="assets\image\course-1.jpg" 
         title="20K"
         rating="★★★★★"
         reviews={123}
         description="Web Design & Development Course for Beginners"
         author="John Doe"
         duration="1.49"
         students={30}
         icon1={<BsJoystick />}
         icon2={<FaClock />}
         icon3={<IoPersonSharp />}
        />
       </div>

       <div data-aos="fade-down">
        
       <CourseCard
         image="assets\image\course-2.jpg" 
         title="20K"
         rating="★★★★★"
         reviews={123}
         description="Web Design & Development Course for Beginners"
         author="John Doe"
         duration="1.49"
         students={30}
         icon1={<BsJoystick />}
         icon2={<FaClock />}
         icon3={<IoPersonSharp />}
        />
       </div>
       <div data-aos="fade-left">
        
       <CourseCard
         image="assets\image\course-3.jpg" 
         title="20K"
         rating="★★★★★"
         reviews={123}
         description="Web Design & Development Course for Beginners"
         author="John Doe"
         duration="1.49"
         students={30}
         icon1={<BsJoystick />}
         icon2={<FaClock />}
         icon3={<IoPersonSharp />}
         />
       </div>
    </div>
      </div>
  );
}

export default Courses;
