import React from 'react';
import Heading from "../Atoms/Headings";
import Profilebox from "../Atoms/Profilebox";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";


function Instructors() {
  return (
    <div className='mt-[50px] mb-[30px]'>
      <div className="container">
      <div className='pb-[20px]' data-aos="fade-down">
        <Heading
          children="INSTRUCTORS"
          className="text-2xl font-bold text-[rgb(6,187,204)] justify-center items-center flex"
        />
        <Heading
          children="Expert Instructors"
          className="text-3xl font-bold text-[black] justify-center items-center flex"
        />
      </div>
      <div className='flex mt-[30px] justify-between'>
       <div data-aos="fade-right">
       <Profilebox
         image="/assets/image/course-1.jpg" 
         icon={<FaFacebookF />}
         icon1={<FaTwitter />}
         icon2={<FaSquareInstagram />}
         Heading="Bilal Noor"
         p="CEO"
        />
       </div>
       <div data-aos="fade-up">
       <Profilebox
         image="/assets/image/course-1.jpg" 
         icon={<FaFacebookF />}
         icon1={<FaTwitter />}
         icon2={<FaSquareInstagram />}
         Heading="Bilal Noor"
         p="CEO"
        />
       </div>
       <div data-aos="fade-down">
       <Profilebox
         image="/assets/image/course-1.jpg" 
         icon={<FaFacebookF />}
         icon1={<FaTwitter />}
         icon2={<FaSquareInstagram />}
         Heading="Bilal Noor"
         p="CEO"
        />
       </div>
       <div data-aos="fade-left">
       <Profilebox
         image="/assets/image/course-1.jpg" 
         icon={<FaFacebookF />}
         icon1={<FaTwitter />}
         icon2={<FaSquareInstagram />}
         Heading="Bilal Noor"
         p="CEO"
        />
       </div>
      </div>
      </div>
    </div>
  );
}

export default Instructors;
