import React from 'react'
import AboutMeImg from '../assets/images/AboutMe.png'
import { Link } from 'react-router'

const AboutMe = () => {
  return (
    <>
        <section id='About_Me' className='mt-[70px] py-[120px]'>
            <div className="container">
                <div className='AllDiv flex items-center justify-between gap-5'>
                    <div id="LeftSide">
                        <p className='font-vollkorn text-[18px] font-medium text-[#EF8100]'>About me</p>
                        <h2 className='font-vollkorn text-[50px] font-medium text-primary'>At The Heart of Design is An Opportunity to Problem Solve.</h2>
                        <img src={AboutMeImg} alt="Image" />
                    </div>
                    <div id="RightSide">
                        <p className='font-jost text-[18px] font-normal text-primary'>Solvency based award-winning design director and UI/UX design expert with 10 years of experience in design and management.</p>
                        <p className='font-jost text-[18px] font-normal text-primary mt-10 mb-[71px]'>Internum various sit a met mattes ululate denim. Orcin asellus celestas tells rut rum tells pelletised eu. Nunc pulvinar supine et ligula albacore</p>
                        <Link className='bg-[#E5745D] text-white py-[21px] px-[39px] font-jost text-[18px] border-2 border-[#fff] outline-4 outline-[#E5745D]' to={'/'}>Download Cv</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default AboutMe