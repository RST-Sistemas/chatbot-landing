/** @format */

import TyC from "./components/TyC";
import Input from "./components/Input";
import Image from "next/image";
import RobotContact from "../../../../public/assets/image/robot-contact.svg";

const Contact = () => {
  return (
    <div
      className='flex flex-col items-center w-full h-full gap-5 p-5 mt-32 mb-10 border rounded-lg shadow bg-base-100 lg:px-24'
      id='contact'
    >
      <h1 className='text-2xl font-bold text-accent'>CONTACTANOS</h1>
      <div className='w-full'>
        <div className='flex flex-wrap justify-between '>
          <Input label={"Nombre completo"} placeholder={"Bonnie Green"} />
          <Input label={"Email"} placeholder={"bonniegreen@gmail.com"} />
        </div>
        <div className='flex flex-wrap justify-between '>
          <Input label={"Empresa"} placeholder={"BonnieSRL"} />
          <Input label={"Rubro empresa"} placeholder={"Venta de celulares"} />
        </div>
        <div className='flex flex-col'>
          <label className='form-control'>
            <div className='label'>
              <span className='label-text text-accent'>Mensaje</span>
            </div>
            <textarea className='h-24 textarea textarea-bordered'></textarea>
          </label>
        </div>
      </div>

      <TyC />

      <button className='flex flex-row items-center w-full text-white shadow-md btn btn-primary'>
        Contactar
      </button>
      <Image
        src={RobotContact}
        alt='robot-contact'
        className='absolute hidden mt-32 left-14 lg:inline'
      />
    </div>
  );
};

export default Contact;
