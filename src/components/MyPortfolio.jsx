import React from 'react'
import { Link } from 'react-router'

const MyPortfolio = () => {
    return (
        <>
            <section className='lg:mt-[240px] mt-[75px] pb-19'>
                <div className="container">
                    <div id="TextHeader" className='mb-[40px]'>
                        <h2 className='font-vollkorn font-medium text-[50px] text-primary text-center'>My Working Portfolio</h2>
                    </div>
                </div>
                <div id="projectShow" className='flex lg:flex-row flex-col gap-[29px] justify-center lg:px-0 px-[16px]'>
                        {/* ----------------First Column------------- */}
                        <div className='flex flex-col gap-[29px] lg:mt-[120px]'>
                            <div className='lg:w-[420px] w-full h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='lg:w-[420px] w-full lg:h-[600px] h-[500px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>
                                    
                                </div>
                            </div>
                            <div className='lg:w-[420px] w-full h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                        {/* ----------------Second Column------------- */}
                        <div className='flex flex-col gap-[29px] lg:mt-[40px]'>
                            <div className='relative lg:w-[420px] w-full lg:h-[600px] h-[500px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>
                                    
                                </div>
                                <div className='absolute bottom-15 lg:py-[32px] py-[16px] pl-[30px] lg:w-[75%] w-[70%] bg-white'>
                                    <p className='font-vollkorn font-semibold text-base text-[#E5745D]'>UI/UX Design</p>
                                    <h2 className='font-vollkorn font-semibold lg:text-[24px] text-[18px] text-primary mt-[6px]'>Daily Hydro-Drops</h2>
                                </div>
                            </div>
                            <div className='lg:w-[420px] w-full h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='lg:w-[420px] w-full lg:h-[600px] h-[500px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                        {/* ----------------Third Column------------- */}
                        <div className='flex flex-col gap-[29px] lg:mt-[120px]'>
                            <div className='lg:w-[420px] w-full h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='lg:w-[420px] w-full lg:h-[600px] h-[500px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='lg:w-[420px] w-full h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[20px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                </div>
                <div id="TextBottom" className='lg:mt-[109px] mt-[71px] flex items-center justify-center'>
                    <Link to={'/'} className='font-vollkorn font-medium lg:text-[50px] text-[42px] text-second relative'>
                        View all Projects 
                        <span className='absolute bottom-0 left-0 w-full h-[3px] bg-second'></span>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default MyPortfolio