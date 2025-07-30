import React from 'react'
import { Link } from 'react-router'

const OurSkills = () => {
  return (
    <>
        <section id='Skills' className='mt-[140px]'>
            <div className="container">
                <div id="AllDiv" className='flex items-center justify-between'>
                    {/* ------------Left Side---------- */}
                    <div>
                        <p className='font-vollkorn font-medium text-[18px] text-[#EF8100]'>OUR SKILLS</p>
                        <h2 className='font-vollkorn font-medium text-[50px] text-primary w-[544px] mt-[11px]'>Modern Digital Creative Agency</h2>
                        <p className='font-jost font-normal text-[18px] text-primary w-[544px] mt-[11px] mb-[66px]'>If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
                        <Link className='bg-[#E5745D] text-white py-[21px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D]' to={'/'}>Download Cv</Link>
                    </div>
                    {/* ------------Left Side---------- */}
                    <div className='w-[670px] flex flex-col gap-[30px]'>
                        <div>
                            <p className='font-vollkorn font-medium text-[18px] text-primary flex items-center justify-between'>Adobe Illustration <span>60%</span></p>
                            <div className='relative w-full h-[10px] bg-primary mt-[11px]'>
                                <span className='absolute left-0 bottom-0 w-[427px] h-full bg-second'></span>
                            </div>
                        </div>
                        <div>
                            <p className='font-vollkorn font-medium text-[18px] text-primary flex items-center justify-between'>Adobe Photoshop <span>85%</span></p>
                            <div className='relative w-full h-[10px] bg-primary mt-[11px]'>
                                <span className='absolute left-0 bottom-0 w-[592px] h-full bg-second'></span>
                            </div>
                        </div>
                        <div>
                            <p className='font-vollkorn font-medium text-[18px] text-primary flex items-center justify-between'>Figma <span>90%</span></p>
                            <div className='relative w-full h-[10px] bg-primary mt-[11px]'>
                                <span className='absolute left-0 bottom-0 w-[645px] h-full bg-second'></span>
                            </div>
                        </div>
                        <div>
                            <p className='font-vollkorn font-medium text-[18px] text-primary flex items-center justify-between'>Adobe XD <span>70%</span></p>
                            <div className='relative w-full h-[10px] bg-primary mt-[11px]'>
                                <span className='absolute left-0 bottom-0 w-[528px] h-full bg-second'></span>
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