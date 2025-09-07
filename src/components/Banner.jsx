import React from 'react'
import BannerImage from '../assets/images/bannerImage.png'
import { Link } from 'react-router'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='pt-[63px] overflow-hidden'>
            <div className="container">
                <div className='BannerDiv flex lg:flex-row lg:gap-0 gap-15 flex-col items-center justify-between'>
                    <div id="bannerLeftSide">
                        <div id="bannerText">
                            <p className='font-vollkorn text-[18px] font-medium text-[#EF8100]' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1400" data-aos-delay="300">UI/UX Designer</p>
                            <h1 className='lg:text-[90px] w-full lg:leading-[100px] leading-[60px] text-[46px] text-primary font-bold  mt-[17px] mb-[8px]' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1800" data-aos-delay="900">Steven Product <span className='Outlined-Text'>Portfolio</span></h1>
                            <p className='font-jost lg:text-[20px] text-[16px] text-[#00413D] font-normal mb-[25px] lg:w-[744px] w-full' data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1800" data-aos-delay="2300">You can find me on Dribble, Instagram, LinkedIn, Behance or Facebook. I'm working at User interface or User experience.</p>
                            <Link className='relative lg:text-[40px] text-[26px] font-semibold font-vollkorn text-[#E5745D]' data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1800" data-aos-delay="2600">
                                Steven@gmai.com 
                                <span className='absolute bottom-0 left-0 w-full h-[3px] bg-second'></span>
                            </Link>
                        </div>
                    </div>
                    <div id='bannerRightSide' data-aos="fade-left" data-aos-easing="ease-in-sine" data-aos-duration="1800" data-aos-delay="2000" data-aos-offset="50">
                        <div className='w-full'><img src={BannerImage} alt="Image" /></div>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Banner