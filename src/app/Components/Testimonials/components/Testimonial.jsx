import Image from "next/image";
import Link from "next/link";
import Guy from "@/assets/image/Guy.svg";
import ArrowTestimonialLeft from "@/assets/svg/ArrowTestimonialLeft.svg";
import ArrowTestimonialRight from "@/assets/svg/ArrowTestimonialRight.svg";

const Testimonial = () => (
  <div className='flex flex-col items-center gap-5 p-5 rounded-lg bg-slate-100 lg:bg-transparent'>
    <div className='flex items-center gap-10'>
      <Link href='#' className='w-[100px] h-[18px]'>
        <Image
          src={ArrowTestimonialLeft}
          alt='arrow-testimonial-left'
          className='hidden lg:inline w-[10px] h-[18px]'
        />
      </Link>
      <p className='text-lg text-accent'>
        El Chatbot me soluciono la vida, ya que antes estaba todo el dia
        respondiendo mensajes y no me permitia seguir haciendo crecer mi
        emprendimiento. Ahora puedo dedicarle mas tiempo a mi empresa y tengo
        mucho mas tiempo libre
      </p>
      <Link href='#' className='w-[100px] h-[18px]'>
        <Image
          src={ArrowTestimonialRight}
          alt='arrow-testimonial-right'
          className='hidden lg:inline'
        />
      </Link>
    </div>
    <p className='flex items-center gap-2 text-base text-accent'>
      <Image className='w-9 h-9' src={Guy} alt='guy' />
      Alejo Araya | Pasante den RST
    </p>
  </div>
);

export default Testimonial;
