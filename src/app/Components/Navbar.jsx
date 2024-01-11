/** @format */

import React from "react";
import robot from './../../assets/svg/robot.svg'
import Link from 'next/link'
import Image from 'next/image'
import bars from '../../../public/assets/svg/bars.svg'

const Navbar = () => {
  return (
    

<nav className="border-gray-200 bg-blue-950 dark:bg-blue-950 dark:border-gray-700 px-5 md:px-24 lg:px-44 ">
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between py-4 ">
    <Link href="#" className="flex items-center">
        <Image src={robot} className="h-9 w-9" alt="Robot" />
    </Link>
    <button data-collapse-toggle="navbar-solid-bg" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-solid-bg" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <Image src={bars} className="w-5 h-5" alt="bars"/>
        
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-solid-bg ">
      <ul className="flex flex-col text-accent mt-4 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
        <li>
          <Link href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Servicios</Link>
        </li>
        <li>
          <Link href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Productos</Link>
        </li>
        <li>
          <Link href="#" className="block py-2 px-3 md:p-0 text-white rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Quienes somos</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
};

export default Navbar;
