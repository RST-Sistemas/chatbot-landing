import Link from "next/link";
import Image from "next/image";
import {
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
  WhatsappIcon,
} from "../../../../assets/svg";

export default function SocialMedia() {
  return (
    <div className='flex items-center justify-center pb-2 mt-6 space-x-5 md:mt-4 rtl:space-x-reverse'>
      <Link href='https://www.facebook.com/rstargentina' target='_blank'>
        <Image
          src={FacebookIcon}
          alt='logo fb'
          className='w-[2rem] h-[2rem] text-gray-400 hover:text-gray-900 dark:hover:text-white m-2 hover:animate-bounce'
        />
        <span className='sr-only'>Facebook page</span>
      </Link>
      <Link href='https://www.instagram.com/rstargentina/' target='_blank'>
        <Image
          src={InstagramIcon}
          alt='logo ig'
          className='w-[2rem] h-[2rem] text-gray-400 hover:text-gray-900 dark:hover:text-white m-2 hover:animate-bounce'
        />
        <span className='sr-only'>Instagram page</span>
      </Link>
      <Link href='https://wa.me/2615086780' target='_blank'>
        <Image
          src={WhatsappIcon}
          alt='logo wpp'
          className='w-[2rem] h-[2rem] text-gray-400 hover:text-gray-900 dark:hover:text-white m-2  hover:animate-bounce'
        />
        <span className='sr-only'>Whatsapp</span>
      </Link>
      <Link href='https://www.linkedin.com/in/rstargentina' target='_blank'>
        <Image
          src={LinkedInIcon}
          alt='logo li'
          className='w-[2rem] h-[2rem] text-gray-400 hover:text-gray-900 dark:hover:text-white m-2 hover:animate-bounce'
        />
        <span className='sr-only'>Linkedin page</span>
      </Link>
    </div>
  );
}
