/** @format */

import TyC from "./components/TyC";
import Input from "./components/Input";
import Image from "next/image";
import { RobotContact } from "@/assets/image";

const Contact = () => {
  return (
    <div
      id='contact'
      className='flex flex-col items-center h-full gap-5 p-5 mx-5 mt-32 mb-10 border rounded-lg shadow bg-base-100 lg:px-24'
    >
      <h1 className='text-2xl font-bold text-accent'>CONTACTANOS</h1>

      <div>
        <div className=''>
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
          <TyC />
        </div>

        <button className='flex flex-row items-center w-full text-white shadow-md btn btn-primary'>
          Contactar
        </button>
      </div>
      <Image
        src={RobotContact}
        alt='robot-contact'
        className='absolute hidden mt-32 left-14 lg:inline'
      />
    </div>
  );
};

export default Contact;
