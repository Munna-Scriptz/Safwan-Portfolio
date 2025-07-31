import React from 'react'
import BannerImage from '../assets/images/bannerImage.png'
import { Link } from 'react-router'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='pt-[63px]'>
            <div className="container">
                <div className='BannerDiv flex lg:flex-row lg:gap-0 gap-15 flex-col items-center justify-between'>
                    <div id="bannerLeftSide">
                        <div id="bannerText">
                            <p className='font-vollkorn text-[18px] font-medium text-[#EF8100]'>UI/UX Designer</p>
                            <h1 className='lg:text-[90px] lg:w-full lg:leading-[100px] leading-[60px] w-[350px] text-[46px] text-primary font-bold  mt-[17px] mb-[8px]'>Steven Product <span className='Outlined-Text'>Portfolio</span></h1>
                            <p className='font-jost lg:text-[20px] text-[16px] text-[#00413D] font-normal mb-[25px] lg:w-[744px] w-full'>You can find me on Dribble, Instagram, LinkedIn, Behance or Facebook. I'm working at User interface or User experience.</p>
                            <Link className='relative text-[40px] font-semibold font-vollkorn text-[#E5745D]'>
                                Steven@gmai.com 
                                <span className='absolute bottom-0 left-0 w-full h-[3px] bg-second'></span>
                            </Link>
                        </div>
                    </div>
                    <div id='bannerRightSide'>
                        <div className='w-full'><img src={BannerImage} alt="Image" /></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner