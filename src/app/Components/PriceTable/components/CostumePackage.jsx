import React from "react";
import ButtonContactar from "../../Buttons/ButtonAssist";
import Link from 'next/link'

export default function CostumePackage() {
  return (
    <div className='flex w-[349px] flex-col justify-between max-w-lg p-6 mx-auto text-center bg-white border border-gray-100 rounded-lg shadow text-accent '>
      <div>
        <h3 className='mb-4 text-2xl font-semibold text-primary'>
          Costumizado
        </h3>
        <p className='mb-4 text-base '>
          ¿Necesitas un plan que se ajuste a tu empresa?
        </p>
        <p className='mb-4 text-base font-bold '>A PARTIR DE</p>
        <div className='flex items-baseline justify-center gap-2 my-4 mr-6 md:my-20'>
          <span className='text-accent'>$</span>
          <span className='text-3xl font-bold text-accent md:text-2xl'>
            360.000
          </span>
          <span className='text-accent'>/mes</span>
        </div>
        <hr className='my-5' />
        <p className='font-light text-accent sm:text-lg dark:text-gray-400'>
          Con nuestro plan personalizado, puedes adaptar fácilmente tu plan a
          las necesidades específicas de tu empresa. ¡Contáctanos ahora para
          obtener más información y comenzar a personalizar tu solución!
        </p>
      </div>

      <div className='flex justify-center'>
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
