/** @format */

import Collapse from "./components/Collapse";
import { RobotFAQ } from "../../../assets/image";
import Image from "next/image";

const FAQ = () => {
  return (
    <>
      <div className='flex flex-col items-center w-full gap-10 mt-10 '>
        <h1 className='text-2xl font-bold text-center'>PREGUNTAS FRECUENTES</h1>
        <div className='flex flex-col w-full gap-5'>
          {listFAQ.map((data, index) => (
            <Collapse key={index} data={data} />
          ))}
        </div>
        <Image
          src={RobotFAQ}
          alt={"robot-faq"}
          className='absolute hidden right-5 mt-[-120px] lg:inline '
        />
      </div>
      <div id='contact' className='h-10'></div>
    </>
  );
};

const listFAQ = [
  {
    title: "¿Qué es un chatbot de WhatsApp?",
    description:
      "Un chatbot de WhatsApp es un software que utiliza reglas preprogramadas y remplazar las conversaciones humanas en WhatsApp: envía mensajes en timepo real, las 24 horas y los 7 dias de la semana.",
  },
  {
    title: "¿Cómo funciona un chatbot de WhatsApp?",
    description:
      "Un chatbot de WhatsApp es un programa de inteligencia artificial diseñado para interactuar con los usuarios a través de la aplicación de mensajería WhatsApp.",
  },
  {
    title: "¿Cómo crear un chatbot de WhatsApp?",
    description:
      "Un chatbot de WhatsApp utiliza inteligencia artificial para procesar mensajes, comprender la intención del usuario y ofrecer respuestas automáticas, brindando información y realizando acciones según la interacción.",
  },
  {
    title: "¿Cuánto cuesta un chatbot de WhatsApp?",
    description:
      "El costo de un chatbot de WhatsApp puede variar ampliamente dependiendo de varios factores, como la complejidad del chatbot, las funcionalidades requeridas, la cantidad de interacciones previstas y si se desarrolla internamente o se contrata a un proveedor externo. Algunas opciones pueden tener costos iniciales de configuración y desarrollo, así como también costos recurrentes asociados con el mantenimiento, el hosting y el procesamiento de mensajes. Es recomendable hacer una investigación y solicitar presupuestos específicos a proveedores de chatbots para obtener una estimación más precisa de los costos involucrados.",
  },
  {
    title: "¿Qué es la API de WhatsApp?",
    description:
      "La API de WhatsApp Business permite a las empresas comunicarse con los usuarios de WhatsApp de manera más efectiva para proporcionar información, servicios y soporte. Algunas de las características que ofrece incluyen mensajes de notificación, respuestas automáticas, mensajes programados, y más.",
  },
];

export default FAQ;
