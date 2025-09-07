import React from 'react'
import { LuUser } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";

const blog = () => {

    const MyBlog = [
        {
            "username" : 'Brian D william' ,
            "date" : 'March 27,2023' ,
            "comment" : '24' ,
            "image" : '24' ,
            "title" : 'Personalization and Automation for Better Results' ,
        },
        {
            "username" : 'Eric Widget' ,
            "date" : 'October 19,2023' ,
            "comment" : '03' ,
            "image" : '24' ,
            "title" : 'Digital Agency Typically has a Team Experts in Areas.' ,
        },
        {
            "username" : 'Thomas R. Toe' ,
            "date" : 'April 16,2023' ,
            "comment" : '07' ,
            "image" : '24' ,
            "title" : 'Unlocking New Opportunities and Insights' ,
        },
    ]

  return (
    <>
        <section id='Blog' className='mt-[140px]'>
            <div className="container">
                <div id="TextHeader">
                    <p className="font-vollkorn font-medium text-[18px] text-[#EF8100]" data-aos="fade-up">Our blog</p>
                    <h2 className="font-vollkorn font-medium lg:text-[50px] text-[40px] text-primary lg:w-[457px] w-full leading-[60px] mt-[24px]" data-aos="fade-up">The Future of AI in Digital Marketing</h2>
                </div>
                {/* ------------Blog---------- */}
                <div className='flex flex-col gap-[30px] mt-[53px]'>
                    {
                        MyBlog.map((items , i)=>(
                            <div key={i} className='w-full lg:h-[240px] h-full border-1 border-[#00413D1A] flex lg:flex-row lg:gap-0 gap-5 flex-col-reverse' data-aos="fade-up">
                                {/* -------First Row------ */}
                                <ul className='flex gap-[14px] flex-col lg:pt-[36px] lg:pl-[42px] lg:pb-0 pb-5 pt-0 pl-[16px]'>
                                    <li className='text-[17px] font-medium font-jost text-[#00413D] flex items-center gap-[10px] opacity-[0.7]'><LuUser/><p>By {items.username}</p></li>
                                    <li className='text-[17px] font-medium font-jost text-[#00413D] flex items-center gap-[10px] opacity-[0.7]'><FaRegClock/><p>{items.date}</p></li>
                                    <li className='text-[17px] font-medium font-jost text-[#00413D] flex items-center gap-[10px] opacity-[0.7]'><FaRegComments/><p>{items.comment} Comments</p></li>
                                </ul>
                                {/* -------Second Row------ */}
                                <div className='lg:ml-[118px] flex items-center justify-center lg:border-l-1 lg:border-r-1 border-[#C4C4C4] px-[20px]'>
                                    <div className='lg:w-[320px] w-full h-[200px] bg-[#C4C4C4]'></div>
                                </div>
                                {/* -------Third Row------ */}
                                <div className='flex items-center justify-center lg:ml-[50px] lg:mt-0 mt-5 ml-[16px]'>
                                    <h2 className="font-vollkorn font-medium lg:text-[30px] text-[24px] lg:w-[490px] w-full text-primary">{items.title}</h2>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    </>
  )
}

export default blog