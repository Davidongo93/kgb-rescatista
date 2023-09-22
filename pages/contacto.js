import Link from 'next/link';
import React from 'react';
import RootLayout from '../app/layout';
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
    </div>
    </RootLayout>
  );
};

export default Contacto;
