import Link from "next/link";
const listItems = [
  {
    title: "Empresa",
    item: [
      {
        name: "Quíenes somos",
        url: "https://www.rst-argentina.com.ar/About",
      },
      {
        name: "Productos y servicios",
        url: "https://www.rst-argentina.com.ar",
      },
      {
        name: "Proyectos",
        url: "https://www.rst-argentina.com.ar",
      },
      {
        name: "Trabaja con nostros",
        url: "https://www.rst-argentina.com.ar/#contacto",
      },
    ],
  },
  {
    title: "Centro de ayuda",
    item: [
      {
        name: "Necesito una web",
        url: "https://www.rst-argentina.com.ar/#contacto",
      },
      {
        name: "Soporte técnico",
        url: "https://www.rst-argentina.com.ar/#contacto",
      },
      {
        name: "Asesoramiento a empresas",
        url: "https://www.rst-argentina.com.ar/#contacto",
      },
      {
        name: "Contanos tu idea",
        url: "https://www.rst-argentina.com.ar/#contacto",
      },
    ],
  },
  {
    title: "Legales",
    item: [
      {
        name: "Política de privacidad",
        url: "#",
      },
      {
        name: "Asesoramiento legal IT",
        url: "#",
      },
      {
        name: "Términios y condiciones",
        url: "#",
      },
    ],
  },
];

export default function ItemsFooter() {
  return (
    <div className='flex flex-wrap justify-between '>
      {listItems.map((items, index) => (
        <div key={index}>
          <h2 className='my-6 text-sm font-bold uppercase text-neutral'>
            {items.title}
          </h2>
          <ul className='text-neutral '>
            {items.item.map(({ name, url }, index) => (
              <li key={index} className='mb-4'>
                <Link href={url} target='_blank' className=' hover:underline'>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
