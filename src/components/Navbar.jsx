import React from 'react'
import Logo from '../assets/images/logo.png'
import { Link } from 'react-router'
import { FiSearch } from "react-icons/fi";
import { HiMiniBars3BottomRight } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
        <nav className='py-[20px] border-[1px] border-[#D3DCD4]'>
            <div className="container">
                <div id="NavRow" className='flex items-center justify-between'>
                    {/* ------Nav Img----- */}
                    <div><img src={Logo} alt="Logo" /></div>

                    {/* ------Nav Links----- */}
                    <div>
                        <ul className='flex items-center gap-[88px] font-jost text-[18px] font-normal text-primary'>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Home</Link></li>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Projects</Link></li>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Pages</Link></li>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Blog</Link></li>
                            <li><Link className=' hover:text-[#E5745D] duration-[.3s]' to={'/'}>Contact</Link></li>
                        </ul>
                    </div>
                    {/* ------Nav Buttons----- */}
                    <div className='flex items-center gap-[25px] text-[21px] text-primary'>
                        <button className='hover:text-[#E5745D] duration-[.3s] cursor-pointer'><FiSearch /></button>
                        <span className='w-[1px] h-[20px] bg-primary'></span>
                        <button className='hover:text-[#E5745D] duration-[.3s] cursor-pointer'><HiMiniBars3BottomRight /></button>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar