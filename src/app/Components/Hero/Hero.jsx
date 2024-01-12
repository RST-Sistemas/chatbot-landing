/** @format */

import { RobotHero } from "@/assets/image";
import Image from "next/image";
import Welcome from "./components/Welcome";

const Hero = () => {
  return (
    <div className=' flex flex-col items-center lg:items-start w-full lg:h-[99vh] gap-5 pt-10 bg-secondary lg:flex-row lg:justify-between lg:px-44'>
      <Welcome />
      <Image
        src={RobotHero}
        alt='DanielBot, a robot charter'
        className='object-cover lg:h-[630px]'
      />
    </div>
  );
};

export default Hero;
