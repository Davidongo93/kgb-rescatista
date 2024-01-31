import Link from 'next/link';
import React from 'react';
import Image from 'next/image';

const Experiencia = () => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-4">Experiencia</h1>
        <p className="text-lg">Aquí puedes agregar contenido relacionado con tu experiencia.</p>
        <Link href="/home">
          <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition inline-block mt-4">
            Back to Home
          </button>
        </Link>
      </div>
      <div className="flex justify-center mt-6"> {/* Centra la imagen */}
        <div className="relative shadow-md hover:shadow-lg hover:bg-orange-200 transition duration-300">
          <Image
            src="/monteluna.jpg"
            alt="Imagen de Monteluna"
            width={800}
            height={600}
          />
        </div>
      </div>
      </>
  );
};

export default Experiencia;
