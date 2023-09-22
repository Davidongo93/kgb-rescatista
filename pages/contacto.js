import Link from 'next/link';
import React from 'react';
import RootLayout from '../app/layout';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.css'; // Importa todas las fuentes

const Contacto = () => {
  return (
    <RootLayout>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Contacto</h1>
        <p className="text-lg">Puedes agregar un formulario de contacto u otra información de contacto aquí.</p>
        <Link href="/home">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition inline-block mt-4">
            Back to Home
          </button>
        </Link>
        <div className="relative mt-4">
          <Image
            src="/three.jpg"
            alt="tres"
            width={400}
            height={300}
          />
          <div className="absolute bottom-0 left-0 right-0 flex justify-center">
            <a
              href="https://www.instagram.com/judasgaleano/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl mx-2 custom-icon-link"
            >
              <i className="fab fa-instagram custom-icon"></i> {/* Icono de Instagram */}
            </a>
            <a
              href="https://www.facebook.com/judas.a.galeano"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl mx-2 custom-icon-link"
            >
              <i className="fab fa-facebook custom-icon"></i> {/* Icono de Facebook */}
            </a>
            <a
              href="https://www.youtube.com/channel/UCicAuv0Aylu-BldY8OAkB3A"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl mx-2 custom-icon-link"
            >
              <i className="fab fa-youtube custom-icon"></i> {/* Icono de YouTube */}
            </a>
          </div>
        </div>
      </div>
      <style jsx>{`
        .custom-icon-link {
          color: orange; /* Cambia el color de los iconos a naranja */
          text-shadow: 1px 1px 3px black; /* Añade una sombra negra a los iconos */
          transition: text-shadow 0.3s ease, color 0.3s ease; /* Agrega una transición para la sombra y el color */
        }

        .custom-icon-link:hover {
          color: white; /* Cambia el color de los iconos a blanco en hover */
          text-shadow: 2px 2px 5px black; /* Aumenta la sombra negra en hover */
        }

        .custom-icon {
          font-size: 24px; /* Cambia el tamaño de los iconos */
        }
      `}</style>
    </RootLayout>
  );
};

export default Contacto;
