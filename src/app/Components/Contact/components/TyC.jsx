import Link from "next/link";

const TyC = () => {
  return (
    <p className='text-accent '>
      Al enviar este formulario, acepta nuestros{" "}
      <Link href={"#"} className='underline text-primary '>
        términos y condiciones
      </Link>{" "}
      y nuestra{" "}
      <Link href={"#"} className='underline text-primary '>
        política de privacidad
      </Link>
      , que explica cómo podemos recopilar, utilizar y divulgar su información
      personal, incluso a terceros.
    </p>
  );
};

export default TyC;
