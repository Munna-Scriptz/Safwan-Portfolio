import React from 'react'
import { Link } from 'react-router'

const OurSkills = () => {
  return (
    <>
        <section id='Skills' className='mt-[140px]'>
            <div className="container">
                <div id="AllDiv">
                    {/* ------------Left Side---------- */}
                    <div>
                        <p className='font-vollkorn font-medium text-[18px] text-[#EF8100]'>OUR SKILLS</p>
                        <h2 className='font-vollkorn font-medium text-[50px] text-primary w-[544px] mt-[11px]'>Modern Digital Creative Agency</h2>
                        <p className='font-jost font-normal text-[18px] text-primary w-[544px] mt-[11px] mb-[66px]'>If you need to redesign your new project, new visual strategy, ux structure or you do have some cool ideas for collaboration</p>
                        <Link className='bg-[#E5745D] text-white py-[21px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D]' to={'/'}>Download Cv</Link>
                    </div>
                    {/* ------------Left Side---------- */}

                </div>
            </div>
        </section>
    </>
  )
}

export default OurSkills