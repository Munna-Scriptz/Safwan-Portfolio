import React from 'react'
import { Link } from 'react-router'

const Subscribe = () => {
  return (
    <>
        <section id='Subscribe' className='mt-[140px]'>
            <div className="container">
                <div id="SubRow" className='bg-[#E5745D] py-[36px] px-[60px] flex items-center justify-between'>
                    <div>
                        <h2 className='font-vollkorn font-bold text-white text-[40px]'>Subscribe to our Youtube!</h2>
                        <p className='font-jost w-[483px] font-normal leading-[26px] text-white text-[18px]'>Please like and subscribe to my channel and press the bell icon to get new video updates.</p>
                    </div>
                    <div>
                        <input className='w-[290px] h-[64px] border-1 border-[#FFFFFF] outline-none text-white pl-[20px] mr-[10px] placeholder:text-white' placeholder='Enter your email' type="email" />
                        <Link className='bg-white text-second py-[14px] px-[39px] font-jost text-[18px] font-medium border-2 border-second outline-4 outline-white' to={'/'}>Download Cv</Link>
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

export default Subscribe