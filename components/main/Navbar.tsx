"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { styles } from "@/components/main/styles";
import logo from "/public/logo.png";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentActive = pathname === '/SkillsPage' ? 'Skills' : pathname === '/ExperiencePage' ? 'Experience' : pathname === '/ProjectsPage' ? 'Projects' : '';

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          href='/'
          className='flex items-center gap-2'
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <Image src={logo} alt='logo' className='w-9 h-9 object-contain '/>
          <p className='text-white text-[18px] font-bold cursor-pointer flex sm:block hidden'>
            Gireesh Bogisetti &nbsp;
          <span className='sm:block hidden'> | Web Development</span>
          </p>
        </Link>
        
        <div className='flex flex-1 justify-end items-center'>
          <div className='hidden sm:flex gap-8'></div>
          <div className='relative'>
            <button
              type='button'
              className='text-white text-[18px] font-medium cursor-pointer'
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              Menu
            </button>
            {isMenuOpen && (
              <div className='absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1'>
                <Link
                  href="/ExperiencePage"
                  className='block px-4 py-2 text-gray-800 hover:bg-black-100'
                >
                  Experience
                </Link>
              </div>
            )}
          </div>
        </div>
          
      </div>
    </nav>
  );
};

export default Navbar;
