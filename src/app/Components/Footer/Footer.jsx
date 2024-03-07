/** @format */

import React from "react";
import { Robot } from "../../..../../../assets/image";
import { ArrowRight } from "../../..../../../assets/svg";
import Link from "next/link";
import Image from "next/image";
import ItemsFooter from "./Components/ItemsFooter";
import SocialMedia from "./Components/SocialMedia";

const Footer = () => {
  return (
    <footer className='bg-base-200'>
      <div className='w-full max-w-screen-xl px-5 pt-10 mx-auto md:px-24 lg:px-44 '>
        <ItemsFooter />
        <hr className='my-5 border-accent opacity-15 ' />
        <div className='flex items-center justify-center gap-5 mx-4'>
          <Image src={Robot} width={49} height={54} alt='robot' />
          <h1 className='text-2xl'> DanielBot</h1>
        </div>
        <span className='block mx-4 text-center text-neutral'>
          © 2015 - 2024
          <Link href='#' className='hover:underline'>
            {" "}
            RST Argentina
          </Link>
          . Reservados todos los derechos.
        </span>
      </div>

      <SocialMedia />

      <div className='z-30 translate-x-0 '>
        <Link href={"https://www.danielbot.com.ar/"}>
          <div className='absolute flex items-center justify-center w-16 h-16 transition-all ease-out -rotate-90 rounded-full bottom-4 right-4 bg-secondary hover:scale-110'>
            <Image src={ArrowRight} alt='whatsapp' width={40} height={40} />
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
