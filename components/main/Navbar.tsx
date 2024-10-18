"use client"; 

import Image from "next/image"; 
import React, { useEffect, useState } from "react"; 
import styles from "./Navbar.module.css";// Corrected import statement
import logo from "/public/logo.png"; 
import Link from "next/link"; 

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false); 
  const [isMenuOpen, setIsMenuOpen] = useState(false); 
   
  useEffect(() => { 
    const handleScroll = () => { 
      const scrollTop = window.scrollY; 
      setScrolled(scrollTop > 100); 
    }; 

    window.addEventListener("scroll", handleScroll); 
    return () => window.removeEventListener("scroll", handleScroll); 
  }, []); 

  return ( 
    <nav 
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 ${ 
      scrolled ? styles.bgPrimary : styles.bgTransparent 
      }`} 
    > 
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'> 
      <Link 
        href='/' 
        className='flex items-center gap-2' 
        onClick={() => window.scrollTo(0, 0)} 
      > 
        <Image src={logo} alt='logo' className='w-9 h-9 object-contain' /> 
        <p className='text-white text-[18px] font-bold cursor-pointer hidden sm:flex'> 
        Gireesh Bogisetti &nbsp; 
        <span className='hidden sm:block'> | Web Development</span> 
        </p> 
      </Link> 
       
      <div className='flex flex-1 justify-end items-center'> 
        <div className='hidden sm:flex gap-8'>
        {/* Add more links here as needed */}
        </div> 
        <div className='relative'> 
        <button 
          type='button' 
          className='text-white text-[18px] font-medium cursor-pointer' 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
        > 
          Menu 
        </button> 
        {isMenuOpen && ( 
            <div className='absolute right-0 mt-2 w-48 bg-black rounded-md shadow-lg py-1'> 
            <Link 
              href="/" 
              className='block px-4 py-2 text-white hover:bg-gray-900' // Adjusted hover style
            > 
              Home 
            </Link> 
            <Link 
              href="/Exp" 
              className='block px-4 py-2 text-white hover:bg-gray-900' // Adjusted hover style
            > 
              Experience 
            </Link> 
            {/* Add more dropdown links here if needed */}
            </div> 
        )} 
        </div> 
      </div>   
      </div> 
    </nav> 
  ); 
}; 

export default Navbar;