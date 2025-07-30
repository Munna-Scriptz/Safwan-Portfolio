import React from 'react'
import { LuUser } from "react-icons/lu";
import { FaRegClock } from "react-icons/fa6";
import { FaRegComments } from "react-icons/fa6";

const blog = () => {

    const MyBlog = [
        {
            "username" : 'Brian Cumin' ,
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
                    <p className="font-vollkorn font-medium text-[18px] text-[#EF8100]">Our blog</p>
                    <h2 className="font-vollkorn font-medium text-[50px] text-primary w-[457px] leading-[60px] mt-[24px]">The Future of AI in Digital Marketing</h2>
                </div>
                {/* ------------Blog---------- */}
                <div className='flex flex-col gap-[30px] mt-[53px]'>
                    {
                        MyBlog.map((items , i)=>(
                            <div key={i} className='w-full h-[240px] border-1 border-[#00413D1A] flex'>
                                {/* -------First Row------ */}
                                <ul className='flex gap-[14px] flex-col pt-[36px] pl-[42px]'>
                                    <li className='text-[17px] font-medium font-jost text-[#00413D] flex items-center gap-[10px] opacity-[0.7]'><LuUser/><p>By {items.username}</p></li>
                                    <li className='text-[17px] font-medium font-jost text-[#00413D] flex items-center gap-[10px] opacity-[0.7]'><FaRegClock/><p>{items.date}</p></li>
                                    <li className='text-[17px] font-medium font-jost text-[#00413D] flex items-center gap-[10px] opacity-[0.7]'><FaRegComments/><p>{items.comment} Comments</p></li>
                                </ul>
                                {/* -------Second Row------ */}
                                <div className='ml-[118px] flex items-center justify-center border-l-1 border-r-1 border-[#C4C4C4] px-[20px]'>
                                    <div className='w-[320px] h-[200px] bg-[#C4C4C4]'></div>
                                </div>
                                {/* -------Third Row------ */}
                                <div className='flex items-center justify-center ml-[50px]'>
                                    <h2 className="font-vollkorn font-medium text-[30px] w-[490px] text-primary">{items.title}</h2>
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