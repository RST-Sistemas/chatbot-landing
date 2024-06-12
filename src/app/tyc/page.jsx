'use client'
import Link from 'next/link';
import { useEffect } from 'react';

const Page = () => {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Términos y Condiciones</h1>
      
      <nav className="mb-4">
        <ul className="list-disc pl-5">
          <li>
            <Link href="#aceptacion-de-los-terminos">Aceptación de los Términos</Link>
          </li>
          <li>
            <Link href="#definiciones">Definiciones</Link>
          </li>
          <li>
            <Link href="#uso-del-chatbot">Uso del Chatbot</Link>
          </li>
          <li>
            <Link href="#propiedad-intelectual">Propiedad Intelectual</Link>
          </li>
          <li>
            <Link href="#datos-personales">Datos Personales</Link>
          </li>
          <li>
            <Link href="#seguridad">Seguridad</Link>
          </li>
          <li>
            <Link href="#limitacion-de-responsabilidad">Limitación de Responsabilidad</Link>
          </li>
          <li>
            <Link href="#indemnizacion">Indemnización</Link>
          </li>
          <li>
            <Link href="#terminacion">Terminación</Link>
          </li>
          <li>
            <Link href="#legislacion-aplicable-y-jurisdiccion">Legislación Aplicable y Jurisdicción</Link>
          </li>
        </ul>
      </nav>
      
      <section id="aceptacion-de-los-terminos" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Aceptación de los Términos</h2>
        <p>
          Para utilizar el Chatbot, usted debe aceptar estos Términos. Al utilizar el Chatbot, usted declara que ha leído y entendido estos Términos y que acepta estar sujeto a ellos. Si no está de acuerdo con estos Términos, no debe utilizar el Chatbot.
        </p>
      </section>
      
      <section id="definiciones" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Definiciones</h2>
        <p><strong>Usuario:</strong> Cualquier persona que acceda o utilice el Chatbot.</p>
        <p><strong>Datos Personales:</strong> Cualquier información que pueda identificar a un Usuario, incluyendo, entre otros, nombre, dirección de correo electrónico, número de teléfono, dirección postal y datos de pago.</p>
        <p><strong>Contenido:</strong> Cualquier información, dato, texto, imagen, audio, video o cualquier otro material que sea transmitido o compartido a través del Chatbot.</p>
      </section>
      
      <section id="uso-del-chatbot" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Uso del Chatbot</h2>
        <p>
          El Chatbot está diseñado para ofrecer información y asistencia a los Usuarios. El Chatbot puede ser utilizado para realizar diversas tareas, como:
        </p>
        <ul className="list-disc pl-5">
          <li>Brindar información sobre productos o servicios.</li>
          <li>Responder preguntas frecuentes.</li>
          <li>Realizar compras.</li>
          <li>Confirmar turnos.</li>
          <li>Solicitar soporte técnico.</li>
          <li>Proporcionar comentarios.</li>
        </ul>
        <p>
          El Chatbot se utilizará de buena fe y de acuerdo con estos Términos. Usted no debe utilizar el Chatbot para ningún propósito ilegal, fraudulento o difamatorio. Usted no debe utilizar el Chatbot para realizar campañas masivas de contenido publicitario, transmitir o compartir Contenido que sea dañino, abusivo, odioso, discriminatorio, amenazante o de cualquier otra manera objetable.
        </p>
      </section>
      
      <section id="propiedad-intelectual" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Propiedad Intelectual</h2>
        <p>
          El Chatbot y todo el Contenido del mismo están protegidos por derechos de autor, marcas registradas y otras leyes de propiedad intelectual. Usted no puede copiar, modificar, distribuir, transmitir, mostrar, realizar, publicar, vender o de cualquier otra manera explotar el Chatbot o su Contenido sin el consentimiento previo por escrito del propietario.
        </p>
      </section>
      
      <section id="datos-personales" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Datos Personales</h2>
        <p>
          El Chatbot recopila Datos Personales de los Usuarios cuando estos utilizan el Chatbot. El Chatbot utiliza los Datos Personales para proporcionar los servicios solicitados por los Usuarios, para mejorar el Chatbot y para enviar comunicaciones de marketing a los Usuarios. El Chatbot no compartirá los Datos Personales de los Usuarios con terceros sin el consentimiento previo por escrito de los mismos. Toda acción estará regida bajo la ley 25.326 Ley nacional de Protección de Datos
        </p>
        <p>
          Los Usuarios pueden acceder, corregir y eliminar sus Datos Personales en cualquier momento. Los Usuarios también pueden solicitar que el Chatbot deje de utilizar sus Datos Personales. Para ello, los Usuarios deben ponerse en contacto con el propietario del Chatbot en la siguiente dirección: usuarios@danielbot.com.ar o formulario de contacto <a href="https://www.danielbot.com.ar/#:~:text=API%20de%20WhatsApp%3F-,CONTACTANOS,-Nombre%20completo" target="_blank">aquí</a>.
        </p>
      </section>
      
      <section id="seguridad" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Seguridad</h2>
        <p>
          El Chatbot utiliza medidas de seguridad razonables para proteger los Datos Personales de los Usuarios. Sin embargo, el Chatbot no puede garantizar la seguridad completa de los Datos Personales. Los Usuarios deben tomar sus propias medidas de seguridad para proteger sus Datos Personales, como utilizar contraseñas seguras y mantener su información personal confidencial.
        </p>
      </section>
      
      <section id="limitacion-de-responsabilidad" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Limitación de Responsabilidad</h2>
        <p>
          El Chatbot se proporciona tal cual y según disponibilidad. El propietario del Chatbot no ofrece ninguna garantía, expresa o implícita, con respecto al Chatbot o su Contenido. El propietario del Chatbot no será responsable de ningún daño directo, indirecto, incidental, especial o consecuente que surja del uso del Chatbot, incluso si el propietario del Chatbot ha sido informado de la posibilidad de tal daño.
        </p>
      </section>
      
      <section id="indemnizacion" className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Indemnización</h2>
        <p>
          Usted acepta indemnizar, defender y mantener libre de daños y perjuicios al propietario del Chatbot, sus filiales, empleados, agentes, representantes y licenciatarios de y contra cualquier reclamo, responsabilidad, daño, pérdida, costo o gasto (incluyendo honorarios de abogados) que surja de o esté relacionado con su uso del Chatbot o su
        </p>
      </section>
    </div>
  );
}
export default Page;
