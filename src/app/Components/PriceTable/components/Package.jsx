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
    <div className='flex hover:scale-105 hover:shadow-xl hover:transition-all hover:duration-300  min-h-[846px] w-full md:max-w-[349px] flex-col justify-between lg p-6  text-center bg-white border border-gray-100 rounded-lg shadow text-neutral '>
      <div>
        <h3 className='mb-4 text-2xl font-semibold text-primary'>{title}</h3>
        <p className='text-base text-center text-neutral sm:text-lg dark:text-gray-400'>
          {description}
        </p>

        {price ? (
          <div className='flex items-center justify-center mt-5'>
            <div className='absolute h-1 mt-1 bg-red-600 w-28'></div>
            <p className='text-2xl '>${price}</p>
            <span className='text-base text-neutral '>{times}</span>
          </div>
        ) : (
          <div className='mt-5'></div>
        )}
        <div className='flex items-baseline justify-center gap-2 '>
          <span className='text-base text-neutral '>$</span>
          <span className='text-3xl font-bold text-neutral md:text-2xl'>
            {offer}
          </span>
          <span className='text-base text-neutral '>{times}</span>
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
