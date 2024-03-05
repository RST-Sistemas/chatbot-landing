/** @format */

import React from "react";
import { Robot } from "../../..../../../assets/image";
import Link from "next/link";
import Image from "next/image";
import { Bars } from "../../../assets/svg";

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 shadow drawer drawer-end shadow-neutral-200'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='flex flex-col drawer-content'>
        {/* Navbar */}
        <div className='justify-between w-full navbar bg-gray-50 md:px-24 lg:px-44 '>
          <Link href='#' className='flex items-center '>
            <Image
              src={Robot}
              width={49}
              height={55}
              alt='Robot'
              className='min-w-[49px] min-h-[55px]'
            />
          </Link>
          <div className='flex-none lg:hidden'>
            <label
              htmlFor='my-drawer-3'
              aria-label='open sidebar'
              className='btn btn-square btn-ghost'
            >
              <Image src={Bars} className='w-5 h-5' alt='bars' />
            </label>
          </div>
          <div className='flex-none hidden lg:block '>
            <ul className='items-center gap-5 menu menu-horizontal'>
              <li>
                <Link
                  className='[&>div]:hover:bg-primary text-base  block px-3 py-2   text-accent md:p-0  md:hover:bg-transparent md:border-0'
                  href='#feature'
                >
                  Caracteristicas
                  <div className='w-full h-[2.5px] mt-[1px] bg-accent rounded-lg  '></div>
                </Link>
              </li>
              <li>
                <Link
                  href='#price-table'
                  className='[&>div]:hover:bg-primary  block px-3 py-2 text-base rounded text-accent md:p-0  md:hover:bg-transparent md:border-0'
                >
                  Productos
                  <div className='w-full  bg-accent rounded-lg h-[2.5px] mt-[1px] '></div>
                </Link>
              </li>
              <li>
                <Link
                  href='#testimonials'
                  className='[&>div]:hover:bg-primary  block px-3 py-2 text-base rounded text-accent md:p-0  md:hover:bg-transparent md:border-0'
                >
                  Testimonios
                  <div className='w-full  bg-accent rounded-lg h-[2.5px] mt-[1px] '></div>
                </Link>
              </li>
              <li>
                <Link
                  href='#faq'
                  className='[&>div]:hover:bg-primary  block px-3 py-2 text-base rounded text-accent md:p-0  md:hover:bg-transparent md:border-0'
                >
                  Preguntas frecuentes
                  <div className='w-full  bg-accent rounded-lg h-[2.5px] mt-[1px] '></div>
                </Link>
              </li>
              <li>
                <Link href={"#contact"} className='p-0'>
                  <button className=' h-[40px] btn btn-primary btn-sm text-white'>
                    Contactar
                  </button>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className='overflow-x-hidden drawer-side'>
        <label
          htmlFor='my-drawer-3'
          aria-label='close sidebar'
          className='drawer-overlay'
        ></label>
        <ul className='min-h-full p-4 pt-10 menu w-80 bg-gray-50'>
          <li>
            <Link className='text-lg' href='#feature'>
              Caracteristicas
            </Link>
          </li>
          <li>
            <Link className='text-lg' href='#price-table'>
              Productos
            </Link>
          </li>
          <li>
            <Link className='text-lg' href='#testimonials'>
              Testimonios
            </Link>
          </li>
          <li>
            <Link className='text-lg' href='#faq'>
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <Link className='text-lg' href={"#contact"}>
              <button className='h-10 text-lg text-white btn-wide btn btn-primary btn-sm'>
                Contactar
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
