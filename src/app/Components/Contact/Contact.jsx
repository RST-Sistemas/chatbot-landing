/** @format */

import Image from "next/image";
import { RobotContact } from "../../../assets/image";
import Form from "./components/Form";

const Contact = () => {
  return (
    <section
      id='contact'
      className='flex flex-col items-center h-full gap-5 p-5 mt-32 mb-10 border rounded-lg shadow bg-base-100 lg:px-24'
    >
      <h1 className='text-2xl font-bold text-neutral'>CONTACTANOS</h1>

      <Form />

      <Image
        src={RobotContact}
        alt='robot-contact'
        className='absolute hidden mt-32 left-14 lg:inline'
      />
    </section>
  );
};

export default Contact;
