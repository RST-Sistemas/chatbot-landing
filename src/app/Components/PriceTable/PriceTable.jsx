/** @format */

import React from "react";
import Package from "./components/Package";
import Statement from "./components/Statement";

const listItems = {
  inicial: [
    {
      text: "1000 chats por mes",
      bold: "",
    },
    {
      text: "Unica Instalacion con integraciones",
      bold: "",
    },
    {
      text: "Asistencia",
      bold: "Personalizada",
    },
    {
      text: "Campañas de",
      bold: "Difusion",
    },
    {
      text: "Autogestion ",
      bold: "de flujos",
    },
  ],
  premium: [
    {
      text: "Hasta 15000 chats mensuales",
      bold: "",
    },
    {
      text: "Integracion completa",
      bold: "",
    },
    {
      text: "Flujos ",
      bold: "comunicacionales",
    },
    {
      text: "Flexibilidad ",
      bold: "Autonomia",
    },
    {
      text: "Marketing  ",
      bold: "sobre campañas de difusion",
    },
  ],
  enterprise: [
    {
      text: "60.000 chats válidos/mes",
      bold: "",
    },
    {
      text: "Multiagente",
      bold: "",
    },
    {
      text: "Asistencia ",
      bold: "Personalizada",
    },
    {
      text: "Asesoramiento en",
      bold: "Marketing",
    },
    {
      text: "Flexibilidad",
      bold: "Autonomia",
    },
  ],
};

const PriceTable = () => {
  return (
    <>
      <section className='bg-white dark:bg-gray-100 '>
        <div className='max-w-screen-xl px-4 mx-auto lg:px-6 sm:px-20'>
          <Statement />
          <div className='space-y-10 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0 md:gap-4 '>
            <Package
              title='Inicial'
              description='La mejor opción para emprendedores.'
              price='$120.000 '
              times={"único"}
              listItems={listItems.inicial}
              url='#contact'
            />

            <Package
              title='Premium'
              description='Ideal para PyMEs con un foco medio de comunicación.'
              price='$185.000 '
              times={"/mes"}
              listItems={listItems.premium}
              url='#contact'
            />

            <Package
              title='Enterprise'
              description='Ideal para empresas de alto tránsito comunicacional.'
              price='$300.000 '
              times={"/mes"}
              listItems={listItems.enterprise}
              url='#contact'
            />
          </div>
        </div>
      </section>
      <div id='testimonials' className='h-10'></div>
    </>
  );
};

export default PriceTable;
