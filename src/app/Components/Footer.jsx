/** @format */

import React from "react";
import robot from './../../assets/svg/robot.svg'
import Link from 'next/link'
import Image from 'next/image'
import li from './../../../public/assets/svg/li.svg'
import ig from './../../../public/assets/svg/ig.svg'
import fb from './../../../public/assets/svg/fb.svg'
import wpp from './../../../public/assets/svg/wpp.svg'

const Footer = () => {
	return (
	<footer className="bg-secondary">
		<div className="mx-auto w-full max-w-screen-xl">
		<div className="grid grid-cols-1 gap-8 px-20 py-6 lg:py-8 md:grid-cols-3">
			<div>
				<h2 className="mb-6 text-sm font-bold text-accent uppercase">Empresa</h2>
				<ul className="text-accent">
					<li className="mb-4">
						<Link href="#" className=" hover:underline">Quienes somos</Link>
					</li>
					<li className="mb-4">
						<Link href="#" className="hover:underline">Productos y servicios</Link>
					</li>
					<li className="mb-4">
						<Link href="#" className="hover:underline">Proyectos</Link>
					</li>
					<li className="mb-4">
						<Link href="#" className="hover:underline">Trabaja con nosotros</Link>
					</li>
				</ul>
			</div>
			<div>
				<h2 className="mb-6 text-sm font-bold text-accent uppercase">Centro de ayuda</h2>
				<ul className="text-accent">
					<li className="mb-4">
						<Link href="#" className="hover:underline">Necesito una web</Link>
					</li>
					<li className="mb-4">
						<Link href="#" className="hover:underline">Soporte técnico</Link>
					</li>
					<li className="mb-4">
						<Link href="#" className="hover:underline">Asesoramiento a empresas</Link>
					</li>
					<li className="mb-4">
						<Link href="#" className="hover:underline">Contanos tu idea</Link>
					</li>
				</ul>
			</div>
			<div>
				<h2 className="mb-6 text-sm font-bold text-accent uppercase">Legales</h2>
				<ul className="text-accent">
					<li className="mb-4">
						<Link href="#" className="hover:underline">Política de privacidad</Link>
					</li>
					<li className="mb-4">
						<Link href="#" className="hover:underline">Asesoramiento legal IT</Link>
					</li>
					<li className="mb-4">
						<Link href="#" className="hover:underline">Términos y condiciones</Link>
					</li>
				</ul>
			</div>
		</div>
		<hr className="my-6 border-gray-300 sm:mx-auto lg:my-8" />
		<div className="px-4 py-6  md:flex md:items-center md:justify-center">
			<div className="flex justify-center ">
				<Image src={robot}  width={80} height={80} alt="robot"/>
				<h1 className="mt-8"> RST-Assist</h1>
			</div>
		</div>
			<span className="block text-sm text-accent sm:text-center">© 2015 - 2024  
			<Link href="#" className="hover:underline"> RST Argentina</Link>. All Rights Reserved.
			</span>
		</div>
			<div className="flex mt-6 mb-2 sm:justify-center md:mt-4 space-x-5 rtl:space-x-reverse">
				<Link href="#">
					<Image src={fb} alt="logo fb" className="w-4 h-4 text-gray-400 hover:text-gray-900 dark:hover:text-white"/>
					<span className="sr-only">Facebook page</span>
				</Link>
				<Link href="#" >
					<Image src={ig} alt="logo ig" className="w-4 h-4 text-gray-400 hover:text-gray-900 dark:hover:text-white"/>
					<span className="sr-only">Instagram page</span>
				</Link>
				<Link href="#">
					<Image src={wpp} alt="logo wpp" className="w-4 h-4 text-gray-400 hover:text-gray-900 dark:hover:text-white"/>
					<span className="sr-only">Whatsapp</span>
				</Link>
				<Link href="#" >
					<Image src={li} alt="logo li" className="w-4 h-4 text-gray-400 hover:text-gray-900 dark:hover:text-white"/>	
					<span className="sr-only">Linkedin page</span>
				</Link>
			</div>
	</footer>

	);
};

export default Footer;
