"use client";
/** @format */

import Image from "next/image";
import Link from "next/link";
import { Guy, GirlBlack, GirlWhite } from "@/assets/image";
import { ArrowTestimonialLeft, ArrowTestimonialRight } from "@/assets/svg";
import { useState } from "react";

const Testimonial = () => {
  const [testimonialIndex, setTestimonialIndex] = useState(1);

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
        <p className='text-lg text-justify transition-all ease-out text-accent'>
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
      <p className='flex items-center gap-2 text-base text-accent'>
        <Image
          className='w-9 h-9'
          src={testimonialList[testimonialIndex].icon}
          alt='guy'
        />
        {testimonialList[testimonialIndex].name} |{" "}
        {testimonialList[testimonialIndex].title}
      </p>
    </div>
  );
};

const testimonialList = [
  {
    text: "El Chatbot me soluciono la vida, ya que antes estaba todo el dia respondiendo mensajes y no me permitia seguir haciendo crecer mi emprendimiento. Ahora puedo dedicarle mas tiempo a mi empresa y tengo mucho mas tiempo libre",
    name: "Alejo Araya",
    title: "Pasante de RST",
    icon: Guy,
  },
  {
    text: "El chatbot ha desempeñado un papel fundamental en su área de trabajo al simplificar procesos diarios. Gracias a su interfaz intuitiva y respuestas instantáneas, ha logrado mejorar significativamente la eficiencia en la gestión de recursos humanos. Desde la coordinación de entrevistas hasta la resolución de consultas de empleados, el chatbot ha permitido a esta profesional optimizar su tiempo y concentrarse en estrategias más estratégicas y enriquecedoras para el desarrollo del personal.",
    name: "Emily Johnson",
    title: "Gerente de Recursos Humanos",
    icon: GirlWhite,
  },
  {
    text: "El chatbot ha sido una herramienta esencial para la resolución de problemas técnicos. Su capacidad para proporcionar respuestas rápidas y asistencia instantánea ha liberado tiempo valioso. Al facilitar la comunicación con el equipo y mejorar la eficiencia en la implementación de nuevas funcionalidades, el chatbot ha permitido a esta ingeniera de software dedicarse a tareas más complejas y desafiantes en su área de trabajo. Ambas profesionales han experimentado beneficios significativos gracias a la integración del chatbot en sus respectivas funciones laborales.",
    name: "Aisha Williams",
    title: "Ingeniera de Software",
    icon: GirlBlack,
  },
];

export default Testimonial;
