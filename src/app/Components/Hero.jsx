/** @format */

import { HiArrowRight } from "react-icons/hi2";

const Hero = () => {
  return (
    <div className='flex flex-col items-center w-full h-screen gap-5 md:justify-between md:items-start bg-secondary md:flex-row md:px-24'>
      <div className='flex flex-col gap-5 md:mt-10'>
        <h1 className='text-[28px] w-[316px] font-bold text-accent leading-8 md:text-[60px] md:w-[410px] md:leading-[70px]'>
          Haz crecer tu negocio con ChatBot
        </h1>
        <h3 className='text-accent w-[299px] md:text-[24px]'>
          Automatiza y mejora las ventas en WhatsApp
        </h3>
        <button className='w-full max-w-[254px] flex-row flex items-center  text-white shadow-md btn btn-primary'>
          Empezar ya
          <HiArrowRight className='w-4 h-4' />
        </button>
      </div>
      <div>
        <div className='h-screen w-full min-w-[321px] md:w-[750px] bg-black'></div>
      </div>
    </div>
  );
};

export default Hero;
