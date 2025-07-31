import React from 'react'
import FooterLogo from '../assets/images/logo.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from 'react-router';

const Footer = () => {
  return (
    <>
        <footer className='mt-[90px]'>
            <div className="container">
                <div id="FooterRow" className='flex lg:flex-row flex-col lg:gap-0 gap-5 lg:items-center lg:justify-between lg:mb-[80px] mb-[30px]'>
                    {/* --------First Column--------   */}
                    <div>
                        <img src={FooterLogo} alt="Logo" />
                        <p className='font-jost text-[15px] lg:w-[282px] w-full text-[#4B7773] mt-[22px]'>Design League is the world’s leading community have for creatives to share, grow, and learn. Design League is the world’s leading community.</p>
                        <div className='lg:mt-[32px] mt-[24px] flex items-center gap-[24px] text-[20px]'>
                            <div className='px-[9px] py-[11px] hover:bg-second hover:text-white duration-[.3s] rounded-[8px] cursor-pointer text-[#4C4C4C]'>
                                <FaFacebookF/>
                            </div>
                            <div className='px-[9px] py-[11px] hover:bg-second hover:text-white duration-[.3s] rounded-[8px] cursor-pointer text-[#4C4C4C]'>
                                <FaTwitter/>
                            </div>
                            <div className='px-[9px] py-[11px] hover:bg-second hover:text-white duration-[.3s] rounded-[8px] cursor-pointer text-[#4C4C4C]'>
                                <RiInstagramFill />
                            </div>
                            <div className='px-[9px] py-[11px] hover:bg-second hover:text-white duration-[.3s] rounded-[8px] cursor-pointer text-[#4C4C4C]'>
                                <FaLinkedinIn />
                            </div>
                            <div className='px-[9px] py-[11px] hover:bg-second hover:text-white duration-[.3s] rounded-[8px] cursor-pointer text-[#4C4C4C]'>
                                <FaYoutube />
                            </div>
                        </div>
                    </div>
                    {/* --------second Column--------   */}
                    <div>
                        <h2 className='text-[#4B7773] text-[20px] font-vollkorn font-bold lg:mb-[24px] mb-[15px] uppercase'>Product</h2>
                        <div className='text-[#4B7773] text-[15px] font-jost font-normal flex flex-col lg:gap-[18px] gap-[10px]'>
                            <Link to={'/'}>Features</Link>
                            <Link to={'/'}>Pricing</Link>
                            <Link to={'/'}>Case studies</Link>
                            <Link to={'/'}>Reviews</Link>
                            <Link to={'/'}>Updates</Link>
                        </div>
                    </div>
                    {/* --------third Column--------   */}
                    <div>
                        <h2 className='text-[#4B7773] text-[20px] font-vollkorn font-bold lg:mb-[24px] mb-[15px] uppercase'>Company</h2>
                        <div className='text-[#4B7773] text-[15px] font-jost font-normal flex flex-col lg:gap-[18px] gap-[10px]'>
                            <Link to={'/'}>About</Link>
                            <Link to={'/'}>Contact us</Link>
                            <Link to={'/'}>Careers</Link>
                            <Link to={'/'}>Culture</Link>
                            <Link to={'/'}>Blog</Link>
                        </div>
                    </div>
                    {/* --------fourth Column--------   */}
                    <div>
                        <h2 className='text-[#4B7773] text-[20px] font-vollkorn font-bold lg:mb-[24px] mb-[15px] uppercase'>Support</h2>
                        <div className='text-[#4B7773] text-[15px] font-jost font-normal flex flex-col lg:gap-[18px] gap-[10px]'>
                            <Link to={'/'}>Getting started</Link>
                            <Link to={'/'}>Help center</Link>
                            <Link to={'/'}>Server status</Link>
                            <Link to={'/'}>Report a bug</Link>
                            <Link to={'/'}>Chat support</Link>
                        </div>
                    </div>
                    {/* --------fifth Column--------   */}
                    <div>
                        <h2 className='text-[#4B7773] text-[20px] font-vollkorn font-bold lg:mb-[24px] mb-[15px] uppercase'>Downloads</h2>
                        <div className='text-[#4B7773] text-[15px] font-jost font-normal flex flex-col lg:gap-[18px] gap-[10px]]'>
                            <Link to={'/'}>iOS</Link>
                            <Link to={'/'}>Android</Link>
                            <Link to={'/'}>Mac</Link>
                            <Link to={'/'}>Windows</Link>
                            <Link to={'/'}>Chrome</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' border-t-1 border-[#00413d1a] flex items-center justify-center'>
                <h2 className='text-[#4B7773] font-jost my-[30px] text-sm'>Copyright © 2023 Design By Estiak. All rights reserved.</h2>
            </div>
        </footer>
    </>
  )
}

export default Footer