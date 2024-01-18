/** @format */

import Testimonial from "./components/Testimonial";
import { RobotTestimonial } from "@/assets/image";
import Image from "next/image";
import Google from "./components/Google";

const Testimonials = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full h-full gap-10 '>
        <h1 className='text-2xl sm:text-2xl sm:w-[350px] font-bold text-accent w-[320px] lg:w-full text-center'>
          Testimonios de gente que ya ha consumido el servicio
        </h1>
        <div className='lg:flex'>
          <Image
            src={RobotTestimonial}
            alt='robot-testimonial'
            className='hidden lg:inline'
          />
          <div className='flex flex-col items-center gap-5 lg:items-start'>
            <Google />
            <Testimonial />
          </div>
        </div>
      </div>
      <div id='faq' className='h-10'></div>
    </>
  );
};

export default Testimonials;
