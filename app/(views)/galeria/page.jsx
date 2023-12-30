import Link from 'next/link';
import React from 'react';
import Image from 'next/image'; // Importa el componente Image de Next.js
import RootLayout from '../../layout';

const Galeria = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Galería</h1>
        <div className="text-lg text-center mb-4"> {/* Centro el texto */}
          <p>Aquí puedes mostrar una galería de imágenes o fotos.</p>
        </div>
        <div className="flex items-center"> {/* Alineo verticalmente el contenido */}
          <div className="w-1/2 pr-4"> {/* Div para el texto (50% del ancho) */}
            <p>Texto aquí...</p>
            <Link href="/home">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4">
                Back to Home
              </button>
            </Link>
          </div>
          <div className="w-1/2"> {/* Div para la imagen (50% del ancho) */}
            <div className="relative shadow-md hover:shadow-lg hover:bg-orange-200 transition duration-300">
              <Image
                src="/cable.jpg"
                alt="Imagen de cable"
                width={800} // Ancho deseado de la imagen
                height={600} // Alto deseado de la imagen
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Galeria;
