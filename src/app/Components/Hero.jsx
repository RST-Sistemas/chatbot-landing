/** @format */

import { HiArrowRight } from "react-icons/hi2";
import Robot from "@/../../public/assets/image/robot-hero.svg";
import Image from "next/image";

const Hero = () => {
  return (
    <div className='flex flex-col items-center lg:items-start    w-full lg:h-[99vh] gap-5 pt-10 bg-secondary lg:flex-row lg:justify-between lg:px-44'>
      <div className='flex flex-col gap-5 lg:mt-10 '>
        <h1 className='text-[28px] w-[316px] font-bold text-accent leading-8 lg:text-[60px] lg:w-[410px] lg:leading-[70px]'>
          Haz crecer tu negocio con DanielBot
        </h1>
        <h3 className='text-accent w-[299px] lg:text-2xl'>
          Automatiza y mejora las ventas en WhatsApp
        </h3>
        <button className='w-full max-w-[254px] flex-row flex items-center  text-white shadow-md btn btn-primary'>
          Empezar ya
          <HiArrowRight className='w-4 h-4' />
        </button>
      </div>
      <div>
        <Image
          src={Robot}
          alt='robot charter'
          className='lg:w-[450px] lg:object-cover '
        />
      </div>
    </div>
  );
};

export default Hero;
