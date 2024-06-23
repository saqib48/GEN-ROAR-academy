"use client"
import React, { useEffect } from 'react';
import Box from '../Atoms/Box';
import { FaGraduationCap } from 'react-icons/fa';
import { TbWorld } from "react-icons/tb";
import { FaBookOpen } from "react-icons/fa6";
import { FaHome } from "react-icons/fa";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 

function Skill() {
  useEffect(() => {
    AOS.init({ duration: 1000 }); 
  }, []);

  return (
    <div className='container flex justify-between' data-aos="fade-left">
     <div data-aos="fade-up">
     <Box
        icon={<FaGraduationCap />}
        Heading='Skilled Instructors'
        p='HTML, CSS, JavaScript, Next.js, React, and Node.js'
      />
     </div>
     <div data-aos="fade-up">
     <Box
        icon={<TbWorld />}
        Heading='Online Classes'
        p='Learn from anywhere with our online classes. Expert instruction, anytime access. Enroll now!'
      />
     </div>
     <div data-aos="fade-down">
     <Box
        icon={<FaHome />}
        Heading='physical classes'
        p='Join us in person for dynamic classes. Engage with expert instructors, hands-on learning. Enroll today!'
      />
     </div>
     <div data-aos="fade-right">
     <Box
        icon={<FaBookOpen />}
        Heading='Book Library'
        p='Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam'
      />
     </div>
    </div>
  );
}

export default Skill;
