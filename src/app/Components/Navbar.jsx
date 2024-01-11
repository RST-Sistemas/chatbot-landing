/** @format */

import React from "react";
import { Robot } from "@/assets/image";
import Link from "next/link";
import Image from "next/image";
import { Bars } from "@/assets/svg";

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-20 px-5 border-gray-200 shadow bg-gray-50 md:px-24 lg:px-44 '>
      <div className='flex flex-wrap items-center justify-between max-w-screen-xl py-4 '>
        <Link href='#' className='flex items-center'>
          <Image src={Robot} width={49} height={55} alt='Robot' />
        </Link>
        <button
          data-collapse-toggle='navbar-solid-bg'
          type='button'
          className='inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600'
          aria-controls='navbar-solid-bg'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <Image src={Bars} className='w-5 h-5' alt='bars' />
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-solid-bg '>
          <ul className='flex flex-col items-center mt-4 rounded-lg text-accent bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700'>
            <li>
              <Link
                href='#feature'
                className='[&>div]:hover:bg-primary  block px-3 py-2 rounded text-accent md:p-0  md:hover:bg-transparent md:border-0'
              >
                Caracteristicas
                <div className='w-full h-[2px] mt-[1px] bg-accent rounded-lg '></div>
              </Link>
            </li>
            <li>
              <Link
                href='#price-table'
                className='[&>div]:hover:bg-primary  block px-3 py-2 rounded text-accent md:p-0  md:hover:bg-transparent md:border-0'
              >
                Productos
                <div className='w-full h-[2px] mt-[1px] bg-accent rounded-lg '></div>
              </Link>
            </li>
            <li>
              <Link
                href='#testimonials'
                className='[&>div]:hover:bg-primary  block px-3 py-2 rounded text-accent md:p-0  md:hover:bg-transparent md:border-0'
              >
                Testimonios
                <div className='w-full h-[2px] mt-[1px] bg-accent rounded-lg '></div>
              </Link>
            </li>
            <li>
              <Link
                href='#faq'
                className='[&>div]:hover:bg-primary  block px-3 py-2 rounded text-accent md:p-0  md:hover:bg-transparent md:border-0'
              >
                Preguntas frecuentes
                <div className='w-full h-[2px] mt-[1px] bg-accent rounded-lg '></div>
              </Link>
            </li>
            <li>
              <Link href={"#contact"}>
                <button className='w-32 h-[20px] btn btn-primary btn-md text-white'>
                  Contactar
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
