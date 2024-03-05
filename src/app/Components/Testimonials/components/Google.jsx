import { GoogleSVG, StarSVG } from "../../../../assets/svg";
import Image from "next/image";
import Link from "next/link";

export default function Google() {
  return (
    <Link
      href={
        "https://www.google.com/search?q=rst+argentina&oq=RST+AR&gs_lcrp=EgZjaHJvbWUqCggAEAAY4wIYgAQyCggAEAAY4wIYgAQyDQgBEC4YrwEYxwEYgAQyBwgCEAAYgAQyBggDEEUYOTIHCAQQABiABDIGCAUQRRhBMgYIBhBFGDwyBggHEEUYPagCALACAA&sourceid=chrome&ie=UTF-8#lrd=0x967e090810815055:0x46c9d3414dd4a4b0,1,,,,"
      }
      target='_blank'
      className='flex flex-col gap-2 lg:ml-24 '
    >
      <Image src={GoogleSVG} alt='Google Logo' width={77} height={24} />
      <div className='flex gap-1'>
        <Image width={31} height={29} src={StarSVG} alt='Star SVG' />
        <Image width={31} height={29} src={StarSVG} alt='Star SVG' />
        <Image width={31} height={29} src={StarSVG} alt='Star SVG' />
        <Image width={31} height={29} src={StarSVG} alt='Star SVG' />
        <Image width={31} height={29} src={StarSVG} alt='Star SVG' />
      </div>
      <div>
        <p>
          Puntaje: <span className='font-bold'>4.9/5 | 318</span> opiniones
        </p>
        <p className='text-sm text-blue-500 underline hover:text-blue-400'>
          ver mas comentarios
        </p>
      </div>
    </Link>
  );
}
