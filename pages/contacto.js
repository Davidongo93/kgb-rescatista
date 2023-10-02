import Link from 'next/link';
import React from 'react';
import Social from '@/components/social/Social';
import Image from 'next/image';
import '@fortawesome/fontawesome-free/css/all.css'; // Importa todas las fuentes

const Contacto = () => {
  return (
    <>
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
          <Social/>
        </div>
      </div>
    </>
  );
};

export default Contacto;
