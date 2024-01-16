/** @format */

import React from "react";
import { Robot } from "@/assets/image";
import Link from "next/link";
import Image from "next/image";

import {
	LinkedInIcon,
	InstagramIcon,
	FacebookIcon,
	WhatsappIcon,
} from "@/assets/svg";

const Footer = () => {
	return (
		<footer className="bg-secondary">
			<div className="w-full max-w-screen-xl px-5 pt-10 mx-auto md:px-24 lg:px-44">
				<div className="flex flex-wrap justify-between">
					<div>
						<h2 className="mb-6 text-sm font-bold uppercase text-accent">
							Empresa
						</h2>
						<ul className="text-accent">
							<li className="mb-4">
								<Link href="#" className=" hover:underline">
									Quienes somos
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Productos y servicios
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Proyectos
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Trabaja con nosotros
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-bold uppercase text-accent">
							Centro de ayuda
						</h2>
						<ul className="text-accent">
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Necesito una web
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Soporte técnico
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Asesoramiento a empresas
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Contanos tu idea
								</Link>
							</li>
						</ul>
					</div>
					<div>
						<h2 className="mb-6 text-sm font-bold uppercase text-accent">
							Legales
						</h2>
						<ul className="text-accent">
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Política de privacidad
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Asesoramiento legal IT
								</Link>
							</li>
							<li className="mb-4">
								<Link href="#" className="hover:underline">
									Términos y condiciones
								</Link>
							</li>
						</ul>
					</div>
				</div>
				<hr className="my-5 border-accent opacity-15 " />
				<div className="flex items-center justify-center gap-5">
					<Image src={Robot} width={49} height={54} alt="robot" />
					<h1 className="text-2xl"> DanielBot</h1>
				</div>
				<span className="block text-center text-accent">
					© 2015 - 2024
					<Link href="#" className="hover:underline">
						{" "}
						RST Argentina
					</Link>
					. All Rights Reserved.
				</span>
			</div>
			<div className="flex flex-col items-center pb-2 mt-6 space-x-5 sm:justify-center md:mt-4 rtl:space-x-reverse">
				<Link href="https://www.facebook.com/rstargentina" target="_blank">
					<Image
						src={FacebookIcon}
						alt="logo fb"
						className="w-[22px] h-[22px] text-gray-400 hover:text-gray-900 dark:hover:text-white"
					/>
					<span className="sr-only">Facebook page</span>
				</Link>
				<Link href="https://www.instagram.com/rstargentina/" target="_blank">
					<Image
						src={InstagramIcon}
						alt="logo ig"
						className="w-[22px] h-[22px] text-gray-400 hover:text-gray-900 dark:hover:text-white"
					/>
					<span className="sr-only">Instagram page</span>
				</Link>
				<Link href="https://wa.me/2615086780" target="_blank">
					<Image
						src={WhatsappIcon}
						alt="logo wpp"
						className="w-[22px] h-[22px] text-gray-400 hover:text-gray-900 dark:hover:text-white"
					/>
					<span className="sr-only">Whatsapp</span>
				</Link>
				<Link href="https://www.linkedin.com/in/rstargentina" target="_blank">
					<Image
						src={LinkedInIcon}
						alt="logo li"
						className="w-[22px] h-[22px] text-gray-400 hover:text-gray-900 dark:hover:text-white"
					/>
					<span className="sr-only">Linkedin page</span>
				</Link>
			</div>
		</footer>
	);
};

export default Footer;
