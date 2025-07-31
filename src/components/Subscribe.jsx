import React from 'react'
import { Link } from 'react-router'

const Subscribe = () => {
  return (
    <>
        <section id='Subscribe' className='mt-[140px]'>
            <div className="container">
                <div id="SubRow" className='bg-[#E5745D] py-[36px] lg:px-[60px] px-5 flex lg:flex-row lg:gap-0 gap-5 flex-col items-center justify-between'>
                    <div>
                        <h2 className='font-vollkorn font-bold text-white lg:text-[40px] text-[25px]'>Subscribe to our Youtube!</h2>
                        <p className='font-jost lg:w-[483px] w-full font-normal leading-[26px] text-white lg:text-[18px] text-[14px]'>Please like and subscribe to my channel and press the bell icon to get new video updates.</p>
                    </div>
                    <div className='flex lg:flex-row flex-col items-center gap-[10px]'>
                        <input className='w-[290px] lg:h-[64px] h-[54px] border-1 border-[#FFFFFF] outline-none text-white pl-[20px] placeholder:text-white' placeholder='Enter your email' type="email" />
                        <Link className='bg-white text-second lg:py-[14px] py-[8px] px-[39px] lg:w-fit w-full font-jost text-[18px] text-center font-medium border-2 border-second outline-4 outline-white' to={'/'}>Download Cv</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Subscribe