/** @format */

import Testimonial from "./components/Testimonial";
import RobotTestimonial from "@/../../public/assets/image/robot-testimonial.svg";
import Image from "next/image";

const Testimonials = () => {
<<<<<<< HEAD
	return (
		<div className="flex flex-col items-center w-full h-full gap-10 px-5 md:px-20 lg:px-44">
			<h1 className="text-2xl font-bold text-accent w-[350px] lg:w-full text-center">
				Testimonios de gente que ya ha consumido el servicio
			</h1>
			<div className="lg:flex">
				<Image
					src={RobotTestimonial}
					alt="robot-testimonial"
					className="hidden lg:inline"
				/>
				<div className="flex flex-col items-center gap-5 pl-10 lg:items-start">
					<div className="flex items-center justify-center w-48 lg:ml-16 h-28 bg-slate-300">
						GOOGLE
					</div>
					<Testimonial />
				</div>
			</div>
		</div>
	);
=======
  return (
    <div className='flex flex-col items-center w-full h-full gap-10 '>
      <h1 className='text-2xl font-bold text-accent w-[350px] lg:w-full text-center'>
        Testimonios de gente que ya ha consumido el servicio
      </h1>
      <div className='lg:flex'>
        <Image
          src={RobotTestimonial}
          alt='robot-testimonial'
          className='hidden lg:inline'
        />
        <div className='flex flex-col items-center gap-5 pl-10 lg:items-start'>
          <div className='flex items-center justify-center w-48 lg:ml-24 h-28 bg-slate-300'>
            GOOGLE
          </div>
          <Testimonial />
        </div>
      </div>
    </div>
  );
>>>>>>> 26379d0f4ae362ecfdb37deed4eac46fa18c77b6
};

export default Testimonials;
