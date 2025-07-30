import React from 'react'

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
                            <div className='w-[514px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[514px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[514px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                        {/* ----------------Second Column------------- */}
                        <div className='flex flex-col gap-[29px] mt-[40px]'>
                            <div className='w-[514px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[514px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[514px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                        {/* ----------------Third Column------------- */}
                        <div className='flex flex-col gap-[29px] mt-[120px]'>
                            <div className='w-[514px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[514px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                            <div className='w-[514px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                                <div className='w-full h-full bg-[#C4C4C4]'>

                                </div>
                            </div>
                        </div>
                    </div>
            </section>
        </>
    )
}

export default MyPortfolio