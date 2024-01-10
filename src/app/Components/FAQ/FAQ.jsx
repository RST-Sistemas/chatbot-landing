/** @format */

import Collapse from "./components/Collapse";

const FAQ = () => {
  return (
    <div className='flex flex-col items-center w-full gap-10 mt-10 px-44'>
      <h1 className='text-2xl font-bold text-center'>PREGUNTAS FRECUENTES</h1>
      <div className='flex flex-col w-full gap-5'>
        {listFAQ.map((data, index) => (
          <Collapse key={index} data={data} />
        ))}
      </div>
    </div>
  );
};

const listFAQ = [
  {
    title: "¿Qué es un chatbot de WhatsApp?",
    description:
      "Un chatbot de WhatsApp es un software que utiliza reglas preprogramadas y remplazar las conversaciones humanas en WhatsApp: envia mensajes en timepo real, las 24 horas y los 7 dias de la semana.",
  },
  {
    title: "¿Cómo funciona un chatbot de WhatsApp?",
    description: "",
  },
  {
    title: "¿Cómo crear un chatbot de WhatsApp?",
    description: "",
  },
  {
    title: "¿Cuánto cuesta un chatbot de WhatsApp?",
    description: "",
  },
  {
    title: "¿Qué es la API de WhatsApp?",
    description: "",
  },
];

export default FAQ;
