import React from 'react'

const MyPortfolio = () => {
    return (
        <>
            <section className='mt-[240px] pb-19'>
                <div className="container">
                    <div id="TextHeader" className='mb-[40px]'>
                        <h2 className='font-vollkorn font-medium text-[50px] text-primary text-center'>My Working Portfolio</h2>
                    </div>
                    <div id="projectShow">
                        {/* ---------First Project------ */}
                        <div className='w-[514px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                            <div className='w-full h-full bg-[#C4C4C4]'>

                            </div>
                        </div>
                        {/* ---------Second Project------ */}
                        <div className='w-[514px] h-[660px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                            <div className='w-full h-full bg-[#C4C4C4]'>

                            </div>
                        </div>
                        {/* ---------Third Project------ */}
                        <div className='w-[514px] h-[400px] outline-1 outline-[#00413D] flex items-center justify-center p-[30px]'>
                            <div className='w-full h-full bg-[#C4C4C4]'>

                            </div>
                        </div>
                    {/* ---------Fourth Project------ */}
                    {/* ---------Fifth Project------ */}
                    </div>

                </div>
            </section>
        </>
    )
}

export default MyPortfolio