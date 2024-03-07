import React from "react";

export default function Price({ className }) {
  return (
    <div
      className={`flex flex-col items-center xl:flex-row xl:gap-3 ${className}`}
    >
      <p className='text-base font-bold '>A PARTIR DE</p>
      <div className='flex items-center gap-2'>
        <span className='text-neutral'>$</span>
        <span className='text-3xl font-bold text-neutral md:text-2xl'>
          360.000
        </span>
        <span className='text-neutral'>/mes</span>
      </div>
    </div>
  );
}
