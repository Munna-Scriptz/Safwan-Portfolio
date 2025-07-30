import React from 'react'
import BannerImage from '../assets/images/bannerImage.png'
const Banner = () => {
  return (
    <>
        <section id='Banner' className='pt-[63px]'>
            <div className="container">
                <div className='BannerDiv flex items-center justify-between'>
                    <div id="bannerLeftSide">
                        <div id="bannerText">
                            <p className='font-vollkorn text-[18px] font-medium text-[#EF8100]'>UI/UX Designer</p>
                            <h1 className='text-[115px] text-primary font-bold leading-[110px] mt-[17px] mb-[8px]'>Steven Product <span className='Outlined-Text'>Portfolio</span></h1>
                            <p className='font-jost text-[20px] text-[#00413D] font-normal mb-[25px] w-[744px]'>You can find me on Dribble, Instagram, LinkedIn, Behance or Facebook. I'm working at User interface or User experience.</p>
                            <h2 className='text-[40px] font-semibold font-vollkorn text-[#E5745D] underline'>Steven@gmai.com</h2>
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