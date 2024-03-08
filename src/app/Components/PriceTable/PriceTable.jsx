/** @format */

import React from "react";
import Package from "./components/Package";
import Statement from "./components/Statement";
import Items from "./components/Items";
import Link from "next/link";
import ButtonContactar from "../Buttons/ButtonAssist";
import CostumePackage from "./components/CostumePackage";
import Flayer from "./components/Flayer";
import Container from "../Container";

const listItems = {
  inicial: [
    {
      text: "3 flujos",
      bold: "",
    },
    {
      text: "",
      bold: "Respuestas automáticas",
    },
    {
      text: "Actualización de mensajes automáticos",
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
      bold: "Respuestas automáticas",
    },
    {
      text: "Actualización de mensajes automáticos",
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
      bold: "Respuestas automáticas",
    },
    {
      text: "Actualización de mensajes",
      bold: "automáticos autoadministrables",
    },
    {
      text: "3 campañas para",
      bold: "2.000 contactos por campaña",
    },
    {
      text: "",
      bold: "5 multiagentes",
    },
    {
      text: "",
      bold: "5 bases de datos",
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
      <section className='bg-base-100'>
        <Container>
          <Statement />
          <Flayer />
          <div className='flex flex-col items-center justify-center gap-5'>
            <div className='flex flex-col gap-5 xl:items-start xl:flex-row xl:justify-between'>
              <Package
                title='Gratis'
                description='¡Mejora tu atención al cliente gratis con nuestras herramientas de negocio!'
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
            </div>
            <CostumePackage />
          </div>
        </Container>
      </section>
      <div id='testimonials' className='h-10'></div>
    </>
  );
};

export default PriceTable;
