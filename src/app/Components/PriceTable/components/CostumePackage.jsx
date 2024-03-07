import React from "react";
import ButtonContactar from "../../Buttons/ButtonAssist";
import Link from "next/link";
import Price from "./Price";

export default function CostumePackage() {
  return (
    <>
      <div className='flex gap-4 hover:scale-105 hover:shadow-xl hover:transition-all hover:duration-300  w-full max-w-[512px] xl:max-w-full flex-col justify-between p-6 text-center bg-white border border-gray-100 rounded-lg shadow text-neutral'>
        <div className='flex flex-col xl:flex-col-reverse xl:gap-5 '>
          <div className='flex justify-center xl:justify-between'>
            <h3 className='text-2xl font-semibold text-primary'>Costumizado</h3>
            <Price className={"hidden xl:flex"} />
          </div>
          <p className='text-base sm:text-lg xl:text-left xl:font-bold xl:text-xl'>
            ¿Necesitas un plan que se ajuste a tu empresa?
          </p>
        </div>
        {/* PRICE */}
        <Price className={"xl:hidden"} />
        {/* LINE */}
        <hr />
        {/* TEXT */}
        {/* DESCRIPTION */}
        <p className='text-left text-neutral sm:text-lg dark:text-gray-400'>
          Con nuestro plan personalizado, puedes adaptar fácilmente tu plan a
          las necesidades específicas de tu empresa. ¡Contáctanos ahora para
          obtener más información y comenzar a personalizar tu solución!
        </p>
        {/* BUTTON */}
        <div className='flex justify-center xl:justify-end'>
          <Link
            href='#contact'
            className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900 mt-4'
          >
            <ButtonContactar className='flex flex-col justify-center' />
          </Link>
        </div>
      </div>
    </>
  );
}
