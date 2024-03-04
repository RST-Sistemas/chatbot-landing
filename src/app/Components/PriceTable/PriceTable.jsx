/** @format */

import React from "react";
import Package from "./components/Package";
import Statement from "./components/Statement";
import Items from "./components/Items";
import Link from "next/link";
import ButtonContactar from "../Buttons/ButtonAssist";
import CostumePackage from "./components/CostumePackage";

const listItems = {
  inicial: [
    {
      text: "3 flujos",
      bold: "",
    },
    {
      text: "",
      bold: "Respuestas automaticas",
    },
    {
      text: "Actualizacion de mensajes automaticos",
      bold: "cada 2 meses",
    },
  ],
  emprendedores: [
    {
      text: "6 flujos",
      bold: "",
    },
    {
      text: "",
      bold: "Respuestas automaticas",
    },
    {
      text: "Actualizacion de mensajes automaticos",
      bold: "2 veces al mes",
    },
    {
      text: "Campaña para",
      bold: "350 contactos",
    },
    {
      text: "",
      bold: "2 multiagentes",
    },
    {
      text: "",
      bold: "3 base de datos",
    },
    {
      text: "",
      bold: "2 descargas mensuales",
    },
    {
      text: "",
      bold: "Envio de archivos multimedia",
    },
  ],
  pyme: [
    {
      text: "10 flujos",
      bold: "",
    },
    {
      text: "",
      bold: "Respuestas automaticas",
    },
    {
      text: "Actualizacion de mensajes",
      bold: "automaticos autoadministrable",
    },
    {
      text: "3 campaña para",
      bold: "2.000 contactos por campaña",
    },
    {
      text: "",
      bold: "5 multiagentes",
    },
    {
      text: "",
      bold: "5 base de datos",
    },
    {
      text: "",
      bold: "Descargas ilimitadas",
    },
    {
      text: "",
      bold: "Envio de archivos multimedia",
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
              title='Gratis'
              description='¡Mejora tu atención al cliente sin costo alguno! Obtén acceso gratuito a herramientas básicas para impulsar tu negocio.'
              offer='00 '
              times={"/mes"}
              listItems={listItems.inicial}
              url='#contact'
            />

            <Package
              title='Emprendedores'
              description='Haz crecer tu empresa con nuestra solución diseñada para emprendedores. '
              price='89.000 '
              offer='50.000'
              times={"/mes"}
              listItems={listItems.emprendedores}
              url='#contact'
            />

            <Package
              title='PyMe'
              description='Optimiza la eficiencia de tu negocio con nuestra oferta especial para PyMes.'
              offer='89.000 '
              price='165.000'
              times={"/mes"}
              listItems={listItems.pyme}
              url='#contact'
            />
            <CostumePackage />
          </div>
        </div>
      </section>
      <div id='testimonials' className='h-10'></div>
    </>
  );
};

export default PriceTable;
