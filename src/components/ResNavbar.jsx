import React, { useState } from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { FiSearch } from "react-icons/fi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";
import { RxCross2 } from "react-icons/rx";

const ResNavbar = () => {

    const [menu , setMenu] = useState(false)
    console.log(menu)

  return (
    <>
        <nav className='relative py-[20px] border-[1px] border-[#D3DCD4] lg:hidden'>
            <div className="container overflow-hidden">
                <div id="NavRow" className='flex items-center justify-between'>
                    {/* ------Nav Img----- */}
                    <Link to={'/'}><img src={Logo} alt="Logo" /></Link>
                    {/* ------Nav Buttons----- */}
                    <div className='flex items-center gap-[25px] text-[21px] text-primary'>
                        <button className='hover:text-[#E5745D] duration-[.3s] cursor-pointer'><FiSearch /></button>
                        <span className='w-[1px] h-[20px] bg-primary'></span>
                        <button className='hover:text-[#E5745D] duration-[.3s] cursor-pointer' onClick={()=>setMenu(!menu)}><HiMiniBars3BottomRight /></button>
                    </div>
                    {/* -----Nav Links----- */}
                    <div className={`absolute left-0 top-0 w-full h-screen duration-[.5s] ${menu? '' : 'left-[-500px]'}`}>
                            <ul className=' h-full w-[60%] bg-second p-5'>
                                <div className='flex items-center justify-between'>
                                    <img src={Logo} alt="Logo" />
                                    <RxCross2 className='text-[25px] cursor-pointer text-white' onClick={()=>setMenu(!menu)}/>
                                </div>
                                <div className='flex items-center flex-col gap-[25px] font-jost text-[18px] font-normal text-white mt-15'>
                                    <li><Link className=' hover:text-primary duration-[.3s]' to={'/'}>Home</Link></li>
                                    <li><Link className=' hover:text-primary duration-[.3s]' to={'/'}>Projects</Link></li>
                                    <li><Link className=' hover:text-primary duration-[.3s]' to={'/'}>Pages</Link></li>
                                    <li><Link className=' hover:text-primary duration-[.3s]' to={'/'}>Blog</Link></li>
                                    <li><Link className=' hover:text-primary duration-[.3s]' to={'/'}>Contact</Link></li>
                                </div>
                            </ul>
                        </div>

                </div>
            </div>
        </nav>
    </>
  )
}

export default ResNavbar