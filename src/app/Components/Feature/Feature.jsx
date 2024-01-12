/** @format */
import Image from "next/image";
import {
	Attention,
	Chat,
	Check,
	Excel,
	Money,
	Shopper,
	UserExp,
} from "@/assets/svg";
import Button from "@/app/Components/Buttons/ButtonAssist";
import Link from "next/link";

const Feature = () => {
	return (
		<div className="flex flex-col items-center h-full gap-5 pt-10 bg-base-100 ">
			<div className="flex flex-col gap-5 text-center">
				<h1 className="text-2xl font-bold">¿Por que elegir DanielBot?</h1>
				<h2 className="w-[350px]">
					ChatBot ofrece velocidad, confiabilidad, atencion, personalizacion y
					otras cosas mas.
				</h2>
			</div>

			<div className="px-10 mx-10 space-y-4 md:grid md:space-y-10 md:space-x-10 md:grid-cols-2 lg:grid-cols-3 md:gap-20 md:space-y-0">
				<div className="md:mt-10 md:ml-16">
					<div className="flex items-start justify-start mb-4 rounded-full w-13 h-13 bg-primary-197 lg:h-15 lg:w-15 dark:bg-primary-900 ">
						<Image
							src={Money}
							width={197}
							height={197}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-yellow-400 dark:text-white">
						Sin Costos Ocultos
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-start">
						Sin costos después del límite de mensajes! Sin tarifas extras
						después de 1000 mensajes, a diferencia de la competencia.
					</p>
				</div>
				<div>
					<div className="flex items-center justify-center mb-4 rounded-full w-13 h-13 bg-primary-197 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={Attention}
							width={197}
							height={197}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-center text-yellow-400 dark:text-white">
						Atención 24/7
					</h3>
					<p className="text-center text-gray-500 dark:text-gray-400">
						Obtén asistencia técnica constante, disponible las 24 horas, para
						resolver cualquier problema o consulta en cualquier momento
					</p>
				</div>
				<div>
					<div className="flex flex-col items-end justify-end mb-4 rounded-full w-13 h-13 bg-primary-197 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={Excel}
							width={197}
							height={197}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-yellow-400 text-end dark:text-white">
						Administra con Excel
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-end">
						Optimiza tu negocio con Excel, controla datos, finanzas y
						operaciones de manera efectiva
					</p>
				</div>
				<div>
					<div className="flex items-start justify-start mb-4 rounded-full w-13 h-13 bg-primary-197 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image src={Chat} width={197} height={197} alt="Picture of money" />
					</div>
					<h3 className="mb-2 text-xl font-bold text-yellow-300 dark:text-white">
						Conexiones Multitudinarias
					</h3>
					<p className="text-gray-500 dark:text-gray-400">
						Multiplica tus conexiones con posibles compradores. Potencia tu red
						con facilidad y eficacia.
					</p>
				</div>
				<div>
					<div className="flex items-center justify-center mb-4 rounded-full w-13 h-13 bg-primary-197 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={UserExp}
							width={197}
							height={197}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-center text-yellow-400 dark:text-white">
						Experencia Personalizada
					</h3>
					<p className="text-center text-gray-500 dark:text-gray-400">
						¡Automatiza mensajes según el historial de compras para una
						experiencia única!
					</p>
				</div>
				<div>
					<div className="flex flex-col items-end justify-end mb-4 rounded-full w-13 h-13 bg-primary-197 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={Shopper}
							width={197}
							height={197}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold text-yellow-400 text-end dark:text-white">
						Mejora las compras online
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-end">
						Liberate de estar ofreciendo productos, deja que el chat lo haga.
					</p>
				</div>
			</div>
		</div>
	);
};
export default Feature;
