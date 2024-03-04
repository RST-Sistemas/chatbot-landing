"use client";

import Image from "next/image";
import Link from "next/link";
import { Guy, GirlBlack, GirlWhite } from "@/assets/image";
import {
  ArrowTestimonialLeft,
  ArrowTestimonialRight,
  StarSVG,
} from "@/assets/svg";
import { useState } from "react";

const Testimonial = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(1);

  const testimonialList = [
    {
      text: "Excelente servicio! Los llame en 3 minutos se comunicaron vía Whatsapp conmigo me dieron todas las indicaciones, todo súper dinámico me enviaron el test vía Whatsapp el mismo día, y no tuve ningún problema en cruzar a chile !",
      name: "Luden Van Herzock",
      icon: "https://lh3.googleusercontent.com/a-/ALV-UjVqcFdkhS4TtQwynuV2j3D_f5pn6rwdkAFbbFMKqtYLWY8=w75-h75-p-rp-mo-br100",
    },
    {
      text: "Muy buena atención, muy clara y precisa. En todo momento me contestaron rápido, y fueron súper puntuales en el horario del turno. Muy conforme",
      name: "Barbara Oña",
      icon: "https://lh3.googleusercontent.com/a-/ALV-UjUURL4oJWCxBn6NjuJmvQNiRqkrwb62xt_DR8EYljU9NEU=w75-h75-p-rp-mo-br100",
    },
    {
      text: "Me atendieron muy rápido y de modo muy profesional. El chico que me respondió por teléfono muy correcto y predispuesto. Las chicas que atienden en el laboratorio muy simpáticas, atentas y profesionales. Da gusto ir al lugar.",
      name: "Aisha Williams",
      icon: "https://lh3.googleusercontent.com/a-/ALV-UjXqYCi5R204bE-bZ-deWXgFkHrCVkYllWmdW-k5AitoxA=w75-h75-p-rp-mo-br100",
    },
  ];

  return (
    <div className='flex flex-col items-center gap-5 p-5 rounded-lg bg-slate-100 lg:bg-transparent'>
      <div className='flex items-center md:gap-3 lg:gap-10'>
        <button
          onClick={() => {
            testimonialIndex > 0 && setTestimonialIndex(testimonialIndex - 1);
          }}
          className='p-0 pr-4 sm:px-4 btn btn-ghost hover:opacity-80 hover:scale-110 hover:bg-transparent'
        >
          <Image
            width={9}
            height={18}
            src={ArrowTestimonialLeft}
            alt='arrow-testimonial-left'
            className=' w-[10px] h-[18px]'
          />
        </button>
        <p className='text-lg transition-all ease-out text-accent'>
          {testimonialList[testimonialIndex].text}
        </p>
        <button
          onClick={() => {
            testimonialIndex < 2 && setTestimonialIndex(testimonialIndex + 1);
          }}
          className='p-0 pl-4 sm:px-4 btn btn-ghost hover:opacity-80 hover:scale-110 hover:bg-transparent'
        >
          <Image
            width={9}
            height={18}
            src={ArrowTestimonialRight}
            alt='arrow-testimonial-right'
            className=''
          />
        </button>
      </div>
      <div className='flex items-center gap-2 text-base text-accent'>
        <Image
          width={36}
          height={36}
          src={testimonialList[testimonialIndex].icon}
          alt='guy'
        />
        {testimonialList[testimonialIndex].name} |{" "}
        <div className='flex gap-1'>
          <Image width={22} height={20} src={StarSVG} alt='Star SVG' />
          <Image width={22} height={20} src={StarSVG} alt='Star SVG' />
          <Image width={22} height={20} src={StarSVG} alt='Star SVG' />
          <Image width={22} height={20} src={StarSVG} alt='Star SVG' />
          <Image width={22} height={20} src={StarSVG} alt='Star SVG' />
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
