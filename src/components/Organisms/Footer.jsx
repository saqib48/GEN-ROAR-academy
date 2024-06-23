import React from 'react'
import Heading from '../Atoms/Headings'
import { FaSquareInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";



function Footer() {
    return (

        <div className='bg-[rgb(24,29,56)] h-[400px] w-[100%] mt-[130px]'>
            <div className='container'>
                <div className='pt-[50px] flex justify-between gap-[40px]'>
                    <div>
                        <div>
                            <Heading
                                children="Quick Link"
                                className='text-bold text-3xl text-[white] w-[150px]'
                            />
                        </div>
                        <div className='flex flex-col gap-[10px] text-[white] pt-[20px]'>
                            <a href="#">About Us</a>
                            <a href="#">Contact Us</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms & Condition</a>
                            <a href="#">FAQs & Help</a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Heading
                                children="Contact"
                                className='text-3xl text-[white]'
                            />
                        </div>
                        <div className='flex flex-col gap-[10px] text-[white] pt-[20px]'>
                            <a href="#"> Alamgeer Road Near Sunny Books Staal</a>
                            <a href="#">+92 349 4028012</a>
                            <a href="#">info@example.com</a>
                            <div className='flex gap-[10px]'>
                                <button className='w-[40px] h-[40px] rounded-full bg-[white] text-[black] justify-center flex items-center text-[25px]'><FaFacebookF /></button>
                                <button className='w-[40px] h-[40px] rounded-full bg-[white] text-[black] justify-center flex items-center text-[25px]'><FaSquareInstagram /></button>
                                <button className='w-[40px] h-[40px] rounded-full bg-[white] text-[black] justify-center flex items-center text-[25px]'><FaTelegramPlane /></button>
                                <button className='w-[40px] h-[40px] rounded-full bg-[white] text-[black] justify-center flex items-center text-[25px]'><FaTwitter /></button>

                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <Heading
                                children="Gallery"
                                className='text-3xl text-[white]'
                            />
                        </div>
                        <div className='flex flex-col gap-[20px] text-[white] pt-[20px]'>
                            <div className='flex flex-col gap-[8px]'>
                                <div className='flex gap-[5px]'>
                                    <div><img src="assets/image/course-1.jpg" alt="" width={70} /></div>
                                    <div><img src="assets/image/course-1.jpg" alt="" width={70} /></div>
                                    <div><img src="assets/image/course-1.jpg" alt="" width={70} /></div>
                                </div>
                                <div className='flex gap-[5px]'>
                                    <div><img src="assets/image/course-1.jpg" alt="" width={70} /></div>
                                    <div><img src="assets/image/course-1.jpg" alt="" width={70} /></div>
                                    <div><img src="assets/image/course-1.jpg" alt="" width={70} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>

                        <div>
                            <Heading
                                children="Newsletter"
                                className='text-3xl text-[white]'
                            />
                        </div>
                        <div className='flex flex-col gap-[10px] pt-[20px]'>
                            <p className='text-[white]'>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className='relative'>
                                <input className='w-[250px] h-[60px] p-[10px]' type="email" placeholder='Enter Email' />
                                <div className='absolute text-[white]  top-[10%] left-[47%] '>
                                    <button className='bg-[black] p-[12px]'>Sign Up</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='pt-[50px]'><hr></hr></div>
            <footer>
                <div className="container">
                    <div className='pt-[30px] text-[white] flex justify-between pb-[-10px]'>
                        <p>© Your Site Name, All Right Reserved. Designed By HTML Codex</p>
                        <div className='flex gap-[30px]'>
                            <a href="#">Home</a>
                            <a href="#">Cookies</a>
                            <a href="#">Help</a>
                            <a href="#">FAQs</a>
                        </div>
                    </div>
                </div>
                </footer >
        </div>
       
    )
}

export default Footer
