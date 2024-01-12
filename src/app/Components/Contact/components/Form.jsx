import React from "react";
import Input from "./Input";
import TerminosCondiciones from "./TerminosCondiciones";

export default function Form() {
  return (
    <form>
      <div>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] w- md:gap-5'>
          <Input label={"Nombre completo"} placeholder={"Bonnie Green"} />
          <Input label={"Email"} placeholder={"bonniegreen@gmail.com"} />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-[1fr_1fr] md:gap-5 '>
          <Input label={"Empresa"} placeholder={"BonnieSRL"} />
          <Input label={"Rubro empresa"} placeholder={"Venta de celulares"} />
        </div>
        <div>
          <label className='form-control'>
            <div className='label'>
              <span className='label-text text-accent'>Mensaje</span>
            </div>
            <textarea className='h-24 textarea textarea-bordered'></textarea>
          </label>
        </div>
      </div>

      <div className='w-[320px] sm:w-full my-2'>
        <TerminosCondiciones />
      </div>

      <button className='flex flex-row items-center w-full text-white shadow-md btn btn-primary'>
        Contactar
      </button>
    </form>
  );
}
