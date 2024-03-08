/** @format */

import React from "react";
import { Robot } from "../../..../../../assets/image";
import Link from "next/link";
import Image from "next/image";
import { Bars } from "../../../assets/svg";

const listNavbar = [
  {
    name: "Características",
    direction: "#feature",
  },
  {
    name: "Productos",
    direction: "#price-table",
  },
  {
    name: "Testimonios",
    direction: "#testimonials",
  },
  {
    name: "Preguntas frecuentes",
    direction: "#faq",
  },
];

const Navbar = () => {
  return (
    <nav className='sticky top-0 z-50 shadow-lg bg-base-100 drawer drawer-end'>
      <input id='my-drawer-3' type='checkbox' className='drawer-toggle' />
      <div className='flex flex-col items-center drawer-content'>
        {/* Navbar */}
        <div className='justify-between max-w-[1530px] w-full navbar md:px-24 lg:px-44'>
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
            <ul className='items-center gap-5 px-0 sm:px-4 menu menu-horizontal '>
              {listNavbar.map((item, index) => (
                <li key={index}>
                  <Link
                    className='[&>div]:hover:bg-primary [&>div]:hover:transition-all [&>div]:hover:ease-in [&>div]:hover:duration-150  text-base block px-3 py-2 text-neutral md:p-0 active:bg-transparent  md:hover:bg-transparent md:border-0'
                    href={item.direction}
                  >
                    {item.name}
                    <div className='w-full h-[2.5px] mt-[1px] rounded-lg '></div>
                  </Link>
                </li>
              ))}

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
        <ul className='min-h-full p-4 pt-10 menu menu-vertical w-[80%] max-w-80 bg-gray-50'>
          <li>
            <Link className='px-0 text-lg sm:px-4 ' href='#feature'>
              Caracteristicas
            </Link>
          </li>
          <li>
            <Link className='px-0 text-lg sm:px-4' href='#price-table'>
              Productos
            </Link>
          </li>
          <li>
            <Link className='px-0 text-lg sm:px-4' href='#testimonials'>
              Testimonios
            </Link>
          </li>
          <li>
            <Link className='px-0 text-lg sm:px-4' href='#faq'>
              Preguntas frecuentes
            </Link>
          </li>
          <li>
            <Link className='px-0 text-lg sm:px-4' href={"#contact"}>
              <button className='w-full h-10 text-lg text-white btn btn-primary btn-sm'>
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
