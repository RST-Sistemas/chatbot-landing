/** @format */

import { RobotHero } from "../../../assets/image";
import Image from "next/image";
import Welcome from "./components/Welcome";

const Hero = () => {
  return (
    <>
      <div className='flex flex-col items-center lg:items-start w-full lg:h-[99vh + 630px] gap-5 pt-10 bg-base-200 lg:flex-row lg:justify-between lg:px-44'>
        <Welcome />
        <Image
          src={RobotHero}
          alt='DanielBot, a robot charter'
          className='object-cover lg:h-[630px]'
        />
      </div>
      <div id='feature' className='h-10'></div>
    </>
  );
};

export default Hero;
