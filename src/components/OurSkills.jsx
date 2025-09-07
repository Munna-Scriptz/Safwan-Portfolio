import React from 'react'
import { Link } from 'react-router'

const OurSkills = () => {
  return (
    <>
        <section id='Skills' className='mt-[140px] overflow-hidden'>
            <div className="container">
                <div id="AllDiv" className='flex lg:flex-row flex-col lg:items-center justify-between lg:gap-0 gap-17 mb-9'>
                    {/* ------------Left Side---------- */}
                    <div>
                        <p className='font-vollkorn font-medium text-[18px] text-[#EF8100]' data-aos="fade-right">OUR SKILLS</p>
                        <h2 className='font-vollkorn font-medium lg:text-[50px] text-[42px] text-primary lg:w-[544px] w-full mt-[11px]' data-aos="fade-right">Modern Digital Creative Agency</h2>
                        <p className='font-jost font-normal text-[18px] text-primary lg:w-[544px] w-full mt-[11px] mb-[66px]' data-aos="fade-right">If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
                        <Link className='bg-[#E5745D] text-white lg:py-[21px] py-[12px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D]' to={'/'} data-aos="fade-right">Download Cv</Link>
                    </div>
                    {/* ------------Left Side---------- */}
                    <div className='lg:w-[670px] w-full flex flex-col gap-[30px]'>
                        <div data-aos="fade-left">
                            <p className='font-vollkorn font-medium text-[18px] text-primary flex items-center justify-between'>Adobe Illustration <span>60%</span></p>
                            <div className='relative w-full h-[10px] bg-primary mt-[11px]'>
                                <span className='absolute left-0 bottom-0 w-[60%] h-full bg-second'></span>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <p className='font-vollkorn font-medium text-[18px] text-primary flex items-center justify-between'>Adobe Photoshop <span>85%</span></p>
                            <div className='relative w-full h-[10px] bg-primary mt-[11px]'>
                                <span className='absolute left-0 bottom-0 w-[85%] h-full bg-second'></span>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <p className='font-vollkorn font-medium text-[18px] text-primary flex items-center justify-between'>Figma <span>90%</span></p>
                            <div className='relative w-full h-[10px] bg-primary mt-[11px]'>
                                <span className='absolute left-0 bottom-0  w-[90%] h-full bg-second'></span>
                            </div>
                        </div>
                        <div data-aos="fade-left">
                            <p className='font-vollkorn font-medium text-[18px] text-primary flex items-center justify-between'>Adobe XD <span>70%</span></p>
                            <div className='relative w-full h-[10px] bg-primary mt-[11px]'>
                                <span className='absolute left-0 bottom-0  w-[70%] h-full bg-second'></span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    </>
  )
}

export default OurSkills