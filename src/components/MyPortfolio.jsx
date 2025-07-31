import React from 'react'
import { Link } from 'react-router'

const MyPortfolio = () => {
    return (
        <>
            <section className='mt-[240px] pb-19'>
                <div className="container">
                    <div id="TextHeader" className='mb-[40px]'>
                        <h2 className='font-vollkorn font-medium text-[50px] text-primary text-center'>My Working Portfolio</h2>
                    </div>
                </div>
                <div id="projectShow" className='flex gap-[29px] justify-center'>
                        {/* ----------------First Column------------- */}
                        <div className='flex flex-col gap-[29px] mt-[120px]'>
                            <div className='w-[500px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[500px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>
                                    
                                </div>
                            </div>
                            <div className='w-[500px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                        {/* ----------------Second Column------------- */}
                        <div className='flex flex-col gap-[29px] mt-[40px]'>
                            <div className='relative w-[500px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>
                                    
                                </div>
                                <div className='absolute bottom-15 py-[32px] pl-[30px] w-[394px] bg-white'>
                                    <p className='font-vollkorn font-semibold text-base text-[#E5745D]'>UI/UX Design</p>
                                    <h2 className='font-vollkorn font-semibold text-[24px] text-primary mt-[6px]'>Daily Hydro-Drops</h2>
                                </div>
                            </div>
                            <div className='w-[500px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[500px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                        {/* ----------------Third Column------------- */}
                        <div className='flex flex-col gap-[29px] mt-[120px]'>
                            <div className='w-[500px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[500px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[500px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                </div>
                <div id="TextBottom" className='mt-[109px] flex items-center justify-center'>
                    <Link to={'/'} className='font-vollkorn font-medium text-[50px] text-second relative'>
                        View all Projects 
                        <span className='absolute bottom-0 left-0 w-full h-[3px] bg-second'></span>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default MyPortfolio