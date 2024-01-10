/** @format */

import React from "react";
import Link from "next/link";
import ButtonContactar from "../Buttons/ButtonContactar";
import Items from "./components/Items";

<<<<<<< HEAD
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
			text: "Asistencia Personalizada:",
			bold: "todo el mes",
		},
		{
			text: "Asesoramiento en difusiones",
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
		<section className="bg-white dark:bg-gray-100">
			<div className="max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:px-6">
				<div className="max-w-screen-md mx-auto mb-8 text-center lg:mb-12">
					<h2 className="mb-4 text-4xl font-extrabold tracking-tight text-accent dark:text-white">
						Compra tu plan de ChatBot sin cargos extras
					</h2>
					<p className="mb-5 text-sm font-light text-accent sm:text-lg dark:text-gray-400">
						Aquí en RST nos enfocamos en mercados donde la tecnología, la
						innovación, y el capital puede liberar valor a largo plazo e
						impulsar el crecimiento económico.
					</p>
				</div>
				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
					<div className="flex flex-col max-w-lg p-6 mx-auto text-center bg-white border border-gray-100 rounded-lg shadow text-accent dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold text-yellow-300">
							Inicial
						</h3>
						<p className="font-light text-accent sm:text-lg dark:text-gray-400">
							La mejor opcion para emprendedores.
						</p>
						<div className="flex items-baseline justify-center my-8">
							<span className="mr-2 text-5xl font-extrabold text-accent">
								$120.000
							</span>
							<span className="text-accent dark:text-gray-400">Unico</span>
						</div>
=======
const Package = ({ title, description, price, listItems, url }) => {};

const PriceTable = () => {
  return (
    <section className='bg-white dark:bg-gray-100'>
      <div className='max-w-screen-xl px-4 pt-8 mx-auto lg:py-16 lg:px-6'>
        <div className='max-w-screen-md mx-auto mb-8 text-center lg:mb-12'>
          <h2 className='mb-4 text-4xl font-extrabold tracking-tight text-accent dark:text-white'>
            Compra tu plan de ChatBot sin cargos extras
          </h2>
          <p className='mb-5 text-sm font-light text-accent sm:text-lg dark:text-gray-400'>
            Aquí en RST nos enfocamos en mercados donde la tecnología, la
            innovación, y el capital puede liberar valor a largo plazo e
            impulsar el crecimiento económico.
          </p>
        </div>
        <div className='space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0'>
          <div className='flex flex-col max-w-lg p-6 mx-auto text-center bg-white border border-gray-100 rounded-lg shadow text-accent dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white'>
            <h3 className='mb-4 text-2xl font-semibold text-yellow-300'>
              Inicial
            </h3>
            <p className='font-light text-accent sm:text-lg dark:text-gray-400'>
              La mejor opcion para emprendedores.
            </p>
            <div className='flex items-baseline justify-center my-8'>
              <span className='mr-2 text-5xl font-extrabold text-accent'>
                $120.000
              </span>
              <span className='text-accent dark:text-gray-400'>Unico</span>
            </div>
>>>>>>> 26379d0f4ae362ecfdb37deed4eac46fa18c77b6

						<Items listItems={listItems.inicial} />

						<Link
							href="#"
							className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
							<ButtonContactar />
						</Link>
					</div>

					<div className="flex flex-col max-w-lg p-6 mx-auto text-center bg-white border border-gray-100 rounded-lg shadow text-accent dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold text-yellow-400">
							Premiun
						</h3>
						<p className="font-light text-accent sm:text-lg dark:text-gray-400">
							Ideal para PyMEs con un foco medio de comunicacion
						</p>
						<div className="flex items-baseline justify-center my-8">
							<span className="mr-2 text-5xl font-extrabold text-accent">
								$185.000
							</span>
							<span className="text-accent dark:text-gray-400">/mes</span>
						</div>

						<Items listItems={listItems.premium} />
						<Link
							href="#"
							className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
							<ButtonContactar />
						</Link>
					</div>

					<div className="flex flex-col max-w-lg p-6 mx-auto text-center bg-white border border-gray-100 rounded-lg shadow text-accent dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold text-yellow-500">
							Enterprise
						</h3>
						<p className="font-light text-accent sm:text-lg dark:text-gray-400">
							Ideal para empresas de alto transito comunicacional.
						</p>
						<div className="flex items-baseline justify-center my-8">
							<span className="mr-2 text-5xl font-extrabold text-accent">
								$300.000
							</span>
							<span className="text-accent dark:text-gray-400">/mes</span>
						</div>

						<Items listItems={listItems.enterprise} />
						<Link
							href="#"
							className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
							<ButtonContactar />
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

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
      text: "Asistencia Personalizada:",
      bold: "todo el mes",
    },
    {
      text: "Asesoramiento en difusiones",
      bold: "Marketing",
    },
    {
      text: "Flexibilidad",
      bold: "Autonomia",
    },
  ],
};

export default PriceTable;
