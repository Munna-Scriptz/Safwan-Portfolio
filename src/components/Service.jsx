import React from 'react'
import ServiceIcon1 from '../assets/images/ServiceIcon1.png'
import ServiceIcon2 from '../assets/images/ServiceIcon2.png'
import ServiceIcon3 from '../assets/images/ServiceIcon3.png'
import { GoArrowRight } from "react-icons/go";
import { Link } from 'react-router';

const Service = () => {
  return (
    <>
        <section id='Service' className='lg:mt-[252px] mt-[110px]'>
            <div className="container">
                <div id="Header" className='flex items-center justify-center flex-col gap-[24px]'>
                    <p className='font-vollkorn font-medium text-[18px] text-[#EF8100]'>SERVICE</p>
                    <p className='font-vollkorn font-medium lg:text-[50px] text-[42px] text-primary lg:w-[475px] w-full text-center'>09+ Years Experience in This Field</p>
                </div>
                {/* -------------Cards------------- */}
                <div id='Cards' className='mt-[40px] flex lg:flex-row flex-col items-center gap-[30px] justify-center'>
                    <div className='lg:w-[410px] w-full bg-white lg:p-[50px] p-[20px]'>
                        <img src={ServiceIcon1} alt="Image" />
                        <h2 className='font-vollkorn font-extrabold text-[24px] text-primary mt-[64px]'>Graphic Design</h2>
                        <p className='font-jost font-normal text-base opacity-[0.7] text-primary mt-[16px]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <Link to={'/'}><GoArrowRight className='text-[30px] text-primary mt-[75px]'/></Link>
                    </div>
                    <div className='lg:w-[410px] w-full bg-white lg:p-[50px] p-[20px]'>
                        <img src={ServiceIcon2} alt="Image" />
                        <h2 className='font-vollkorn font-extrabold text-[24px] text-primary mt-[64px]'>Web & Development</h2>
                        <p className='font-jost font-normal text-base opacity-[0.7] text-primary mt-[16px]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <Link to={'/'}><GoArrowRight className='text-[30px] text-second mt-[75px]'/></Link>
                    </div>
                    <div className='lg:w-[410px] w-full bg-white lg:p-[50px] p-[20px]'>
                        <img src={ServiceIcon3} alt="Image" />
                        <h2 className='font-vollkorn font-extrabold text-[24px] text-primary mt-[64px]'>Writing and Marketing</h2>
                        <p className='font-jost font-normal text-base opacity-[0.7] text-primary mt-[16px]'>Facilizes sed odic morbid quiz commodore odic nexus et malasadas fames research and brand strategy system.</p>
                        <Link to={'/'}><GoArrowRight className='text-[30px] text-primary mt-[75px]'/></Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Service