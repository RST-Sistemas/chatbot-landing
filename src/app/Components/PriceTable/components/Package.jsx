import React from "react";
import Link from "next/link";
import ButtonContactar from "../../Buttons/ButtonContactar";
import Items from "./Items";

const Package = ({
  title,
  times,
  description,
  price,
  offer,
  listItems,
  url,
}) => {
  return (
    <div className='flex min-h-[846px] w-[349px] flex-col  max-w-lg p-6 mx-auto text-center bg-white border border-gray-100 rounded-lg shadow text-accent '>
      <div>
        <h3 className='mb-4 text-2xl font-semibold text-primary'>{title}</h3>
        <p className='text-base text-accent sm:text-lg dark:text-gray-400'>
          {description}
        </p>

        {price && (
          <div className='flex items-center justify-center'>
            <div className='absolute h-1 mt-1 bg-red-600 w-28'></div>
            <p className='text-2xl '>${price}</p>
          </div>
        )}
        <div className='flex items-baseline justify-center gap-2 '>
          <span className='text-base text-accent '>$</span>
          <span className='text-3xl font-bold text-accent md:text-2xl'>
            {offer}
          </span>
          <span className='text-base text-accent '>{times}</span>
        </div>
        <hr className='my-10' />
        <Items listItems={listItems} />
      </div>

      <div className='flex justify-center'>
        <Link
          href={url}
          className='text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white dark:focus:ring-primary-900 mt-4'
        >
          <ButtonContactar className='flex flex-col justify-center' />
        </Link>
      </div>
    </div>
  );
};

export default Package;
