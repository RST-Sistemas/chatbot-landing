import React from "react";
import ButtonContactar from "../../Buttons/ButtonAssist";
import Link from "next/link";

export default function CostumePackage() {
  return (
    <div className='flex flex-col justify-between w-full p-6 text-center bg-white border border-gray-100 rounded-lg shadow text-neutral '>
      <div className='items-start flex flex-col w-[80%]'>
        <div className='flex flex-col w-full'>
          <div className='flex flex-col md:flex-col-reverse md:items-start'>
            {/* TITLE */}
            <div className='flex flex-col w-full md:flex-row md:justify-between'>
              <h3 className='text-2xl font-bold md:text-3xl text-primary'>
                Costumizado
              </h3>
              <div className='flex-col items-center hidden gap-3 md:flex md:flex-row'>
                <p className='mb-2 text-base font-bold md:mb-0 '>A PARTIR DE</p>
                <div className='flex items-baseline justify-center gap-2 '></div>
                <span className='text-neutral'>$</span>
                <span className='text-3xl font-bold text-neutral md:text-2xl'>
                  360.000
                </span>
                <span className='text-neutral'>/mes</span>
              </div>
            </div>
            {/* WELCOME */}
            <p className='mb-4 text-base md:font-bold md:text-2xl'>
              ¿Necesitas un plan que se ajuste a tu empresa?
            </p>
          </div>
          {/* PRICE */}
          <div className='flex flex-col items-center gap-3 md:flex-row md:hidden'>
            <p className='mb-2 text-base font-bold md:mb-0 '>A PARTIR DE</p>
            <div className='flex items-baseline justify-center gap-2 '></div>
            <span className='text-neutral'>$</span>
            <span className='text-3xl font-bold text-neutral md:text-2xl'>
              360.000
            </span>
            <span className='text-neutral'>/mes</span>
          </div>
        </div>
        {/* HORIZONTAL LINE */}
        <hr className='w-full my-5 border-primary ' />
        {/* INFORMATION */}
        <p className='text-left text-neutral sm:text-lg dark:text-gray-400'>
          Con nuestro plan personalizado, puedes adaptar fácilmente tu plan a
          las necesidades específicas de tu empresa. ¡Contáctanos ahora para
          obtener más información y comenzar a personalizar tu solución!
        </p>
      </div>

      <div className='flex justify-end'>
        <Link
          href='#contact'
          className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900 mt-4'
        >
          <ButtonContactar className='flex flex-col justify-center' />
        </Link>
      </div>
    </div>
  );
}
