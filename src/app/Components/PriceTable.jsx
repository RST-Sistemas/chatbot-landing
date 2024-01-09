/** @format */

import React from "react";
import Link from "next/link";
import ButtonContactar from "./ButtonContactar";

const PriceTable = () => {
	return (
		<section className="bg-white dark:bg-gray-100">
			<div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
				<div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-12">
					<h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
						Compra tu plan de ChatBot sin cargos extras
					</h2>
					<p className="mb-5 font-light text-sm text-gray-500 sm:text-lg dark:text-gray-400">
						Aquí en RST nos enfocamos en mercados donde la tecnología, la
						innovación, y el capital puede liberar valor a largo plazo e
						impulsar el crecimiento económico.
					</p>
				</div>
				<div className="space-y-8 lg:grid lg:grid-cols-3 sm:gap-6 xl:gap-10 lg:space-y-0">
					<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold text-yellow-300">
							Inicial
						</h3>
						<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							La mejor opcion para emprendedores.
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">$120.000</span>
							<span className="text-gray-500 dark:text-gray-400">Unico</span>
						</div>
						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>1000 chats por mes</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>Unica Instalacion con integraciones</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Asistencia{" "}
									<span className="font-semibold">Personalizada</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Campañas de
									<span className="font-semibold"> Difusion</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Autogestion <span className="font-semibold">de flujos</span>
								</span>
							</li>
						</ul>
						<Link
							href="#"
							className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
							<ButtonContactar />
						</Link>
					</div>

					<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold text-yellow-400">
							Premiun
						</h3>
						<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							Ideal para PyMEs con un foco medio de comunicacion
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">$185.000</span>
							<span className="text-gray-500 dark:text-gray-400">/mes</span>
						</div>

						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>Hasta 15000 chats mensuales</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>Integracion completa</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Flujos
									<span className="font-semibold"> comunicacionales</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Flexibilidad
									<span className="font-semibold"> Autonomia</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Marketing
									<span className="font-semibold">
										{" "}
										sobre campañas de difusion
									</span>
								</span>
							</li>
						</ul>
						<Link
							href="#"
							className="text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:ring-primary-200 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:text-white  dark:focus:ring-primary-900">
							<ButtonContactar />
						</Link>
					</div>

					<div className="flex flex-col p-6 mx-auto max-w-lg text-center text-gray-900 bg-white rounded-lg border border-gray-100 shadow dark:border-gray-600 xl:p-8 dark:bg-gray-800 dark:text-white">
						<h3 className="mb-4 text-2xl font-semibold text-yellow-500">
							Enterprise
						</h3>
						<p className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
							Ideal para empresas de alto transito comunicacional.
						</p>
						<div className="flex justify-center items-baseline my-8">
							<span className="mr-2 text-5xl font-extrabold">$300.000</span>
							<span className="text-gray-500 dark:text-gray-400">/mes</span>
						</div>

						<ul role="list" className="mb-8 space-y-4 text-left">
							<li className="flex items-center space-x-3">
								<svg
									class="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>60.000 chats válidos/mes</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>Multiagente</span>
							</li>
							<li className="flex items-center space-x-3">
								{/* <!-- Icon --> */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Asistencia Personalizada:{" "}
									<span className="font-semibold"> todo el mes</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								{/* <!-- Icon --> */}
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Asesoramiento en difusiones{" "}
									<span className="font-semibold">Marketing</span>
								</span>
							</li>
							<li className="flex items-center space-x-3">
								<svg
									className="flex-shrink-0 w-5 h-5 text-green-500 dark:text-green-400"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fill-rule="evenodd"
										d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
										clip-rule="evenodd"></path>
								</svg>
								<span>
									Flexibilidad <span className="font-semibold"> Autonomia</span>
								</span>
							</li>
						</ul>
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

export default PriceTable;
