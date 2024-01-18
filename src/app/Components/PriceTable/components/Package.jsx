import React from "react";
import Link from "next/link";
import ButtonContactar from "../../Buttons/ButtonContactar";
import Items from "./Items";

const Package = ({ title, times, description, price, listItems, url }) => {
  return (
    <div className='flex flex-col justify-between max-w-lg p-6 mx-auto text-center bg-white border border-gray-100 rounded-lg shadow text-accent '>
      <div>
        <h3 className='mb-4 text-2xl font-semibold text-yellow-300'>{title}</h3>
        <p className='font-light text-accent sm:text-lg dark:text-gray-400'>
          {description}
        </p>
        <div className='flex items-baseline justify-center my-4 mr-6 md:my-20'>
          <span className='mr-2 text-5xl font-extrabold text-accent md:text-2xl'>
            {price}
          </span>
          <span className='text-accent dark:text-gray-400'>{times}</span>
        </div>
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
