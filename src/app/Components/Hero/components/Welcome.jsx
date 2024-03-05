import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

export default function Welcome() {
  return (
    <div className='flex flex-col gap-5 lg:mt-10 '>
      <h1 className='text-[28px] w-[316px] font-bold text-neutral leading-8 lg:text-[60px] lg:w-[410px] lg:leading-[70px]'>
        Haz crecer tu negocio con DanielBot
      </h1>
      <h3 className='text-neutral w-[299px] lg:text-2xl'>
        Automatiza y mejora las ventas en WhatsApp
      </h3>
      <Link href={"#price-table"}>
        <button className='w-full max-w-[254px] flex-row flex items-center  text-white shadow-md btn btn-primary'>
          Empezar ya
          <HiArrowRight className='w-4 h-4' />
        </button>
      </Link>
    </div>
  );
}
