/** @format */
import Image from "next/image";
import money from "@/../../public/assets/svg/money.svg";
import chat from "@/../../public/assets/svg/chat.svg";
import attention from "@/../../public/assets/svg/247.svg";
import excel from "@/../../public/assets/svg/excel.svg";
import userexp from "@/../../public/assets/svg/userexp.svg";
import shopper from "@/../../public/assets/svg/shopper.svg";
import ButtonContactar from "@/app/Components/Buttons/ButtonContactar";

const Feature = () => {
<<<<<<< HEAD:src/app/Components/Feature/Feature.jsx
	return (
		<div className="flex flex-col items-center my-10">
			<div className="flex flex-col gap-5 text-center mb-20">
				<h1 className="text-2xl font-bold">¿Por que elegir RST-Assist?</h1>
				<h2 className="w-[350px]">
					ChatBot ofrece velocidad, confiabilidad, atencion, personalizacion y
					otras cosas mas.
				</h2>
			</div>

			<div className="space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0 ml-10 mr-10 mx-5">
				<div className="">
					<div className="flex justify-start items-start mb-4 w-13 h-13 rounded-full bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={money}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold dark:text-white text-yellow-300">
						Sin Costos Ocultos
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-start">
						Sin costos después del límite de mensajes! Sin tarifas extras
						después de 1000 mensajes, a diferencia de la competencia.
					</p>
				</div>
				<div>
					<div className="flex justify-center items-center mb-4 w-13 h-13 rounded-full bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={attention}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl text-center font-bold dark:text-white text-yellow-300">
						Atención 24/7
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-center">
						Obtén asistencia técnica constante, disponible las 24 horas, para
						resolver cualquier problema o consulta en cualquier momento
					</p>
				</div>
				<div>
					<div className="flex flex-col justify-end items-end mb-4 w-13 h-13 rounded-full bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={excel}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl text-end text-yellow-300 font-bold dark:text-white">
						Administra con Excel
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-end">
						Optimiza tu negocio con Excel, controla datos, finanzas y
						operaciones de manera efectiva
					</p>
				</div>
				<div>
					<div className="flex justify-start items-start mb-4 w-13 h-13 rounded-full bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image src={chat} width={100} height={100} alt="Picture of money" />
					</div>
					<h3 className="mb-2 text-xl font-bold dark:text-white text-yellow-300">
						Conexiones Multitudinarias
					</h3>
					<p className="text-gray-500 dark:text-gray-400">
						Multiplica tus conexiones con posibles compradores. Potencia tu red
						con facilidad y eficacia.
					</p>
				</div>
				<div>
					<div className="flex justify-center items-center mb-4 w-13 h-13 rounded-full bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image src={userexp} width={100} height={100} alt="Experience" />
					</div>
					<h3 className="mb-2 text-xl font-bold dark:text-white text-yellow-300 text-center">
						Experiencia Personalizada
					</h3>
					<p class="text-gray-500 dark:text-gray-400">
						¡Automatiza mensajes según el historial de compras para una
						experiencia única!
					</p>
				</div>
				<div>
					<div className="flex justify-end items-end mb-4 w-13 h-13 rounded-full bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900">
						<Image
							src={shopper}
							width={100}
							height={100}
							alt="Picture of money"
						/>
					</div>
					<h3 className="mb-2 text-xl font-bold dark:text-white text-yellow-300 text-end">
						Mejora las compras online
					</h3>
					<p className="text-gray-500 dark:text-gray-400 text-end">
						Liberate de estar ofreciendo productos, deja que el chat lo haga.
					</p>
				</div>
			</div>
			<div className="flex flex-col justify-center items-center my-10 ">
				<ButtonContactar />
			</div>
		</div>
	);
=======
  return (
    <div className='flex flex-col items-center h-full gap-5 '>
      <div className='flex flex-col gap-5 text-center'>
        <h1 className='text-2xl font-bold'>¿Por que elegir RST-Assist?</h1>
        <h2 className='w-[350px]'>
          ChatBot ofrece velocidad, confiabilidad, atencion, personalizacion y
          otras cosas mas.
        </h2>
      </div>

      <div className='ml-10 mr-10 space-y-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0'>
        <div className=''>
          <div className='flex items-start justify-start mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900'>
            <Image
              src={money}
              width={100}
              height={100}
              alt='Picture of money'
            />
          </div>
          <h3 className='mb-2 text-xl font-bold text-yellow-400 dark:text-white'>
            Sin Costos Ocultos
          </h3>
          <p className='text-gray-500 dark:text-gray-400 text-start'>
            Sin costos después del límite de mensajes! Sin tarifas extras
            después de 1000 mensajes, a diferencia de la competencia.
          </p>
        </div>
        <div>
          <div className='flex items-center justify-center mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900'>
            <Image
              src={attention}
              width={100}
              height={100}
              alt='Picture of money'
            />
          </div>
          <h3 className='mb-2 text-xl font-bold text-center text-yellow-400 dark:text-white'>
            Atención 24/7
          </h3>
          <p className='text-center text-gray-500 dark:text-gray-400'>
            Obtén asistencia técnica constante, disponible las 24 horas, para
            resolver cualquier problema o consulta en cualquier momento
          </p>
        </div>
        <div>
          <div className='flex flex-col items-end justify-end mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900'>
            <Image
              src={excel}
              width={100}
              height={100}
              alt='Picture of money'
            />
          </div>
          <h3 className='mb-2 text-xl font-bold text-yellow-400 text-end dark:text-white'>
            Administra con Excel
          </h3>
          <p className='text-gray-500 dark:text-gray-400 text-end'>
            Optimiza tu negocio con Excel, controla datos, finanzas y
            operaciones de manera efectiva
          </p>
        </div>
        <div>
          <div className='flex items-start justify-start mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-15 lg:w-15 dark:bg-primary-900'>
            <Image src={chat} width={100} height={100} alt='Picture of money' />
          </div>
          <h3 className='mb-2 text-xl font-bold text-yellow-300 dark:text-white'>
            Conexiones Multitudinarias
          </h3>
          <p className='text-gray-500 dark:text-gray-400'>
            Multiplica tus conexiones con posibles compradores. Potencia tu red
            con facilidad y eficacia.
          </p>
        </div>
        <div>
          <div className='flex items-center justify-center mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
            <svg
              className='w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path d='M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z'></path>
            </svg>
          </div>
          <h3 className='mb-2 text-xl font-bold dark:text-white'>
            Enterprise Design
          </h3>
          <p class='text-gray-500 dark:text-gray-400'>
            Craft beautiful, delightful experiences for both marketing and
            product with real cross-company collaboration.
          </p>
        </div>
        <div>
          <div className='flex items-center justify-center mb-4 rounded-full w-13 h-13 bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900'>
            <svg
              className='w-13 h-13 text-primary-600 lg:w-6 lg:h-6 dark:text-primary-300'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                d='M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z'
                clip-rule='evenodd'
              ></path>
            </svg>
          </div>
          <h3 className='mb-2 text-xl font-bold dark:text-white'>Operations</h3>
          <p className='text-gray-500 dark:text-gray-400'>
            Keep your company’s lights on with customizable, iterative, and
            structured workflows built for all efficient teams and individual.
          </p>
        </div>
      </div>
    </div>
  );
>>>>>>> 26379d0f4ae362ecfdb37deed4eac46fa18c77b6:src/app/Components/Feature.jsx
};
export default Feature;
