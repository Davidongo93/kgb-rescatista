"use client"
import Link from 'next/link';
import Image from 'next/image';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    console.log('Componente Home montado');
  }, []);
  return (
    <div>
      <main className="relative min-h-screen mt-14">
        {/* Capa de fondo */}
        <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full" style={{ objectFit: 'cover', position: 'fixed' }}>
          <source src="/flames.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Capa de contenido */}
        <div className="relative z-0 flex flex-col justify-start items-center h-auto text-white">

          <section className="text-center mt-10 relative z-10">
            <p className="text-xl">
              explore <code className="text-yellow-400">erolpxe</code>
            </p>

            {/* Enlace al landing */}
            <Link href="/">
              <button className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition inline-block mt-4">
                Back to Landing
              </button>
            </Link>
          </section>
          {/* Contenido adicional en el lado derecho */}
          <div className="flex justify-end items-center mt-4">
            <div className="text-white text-left mr-8">
              <Image src="/chopper.jpeg" alt="Bombero" width={200} height={200} /> {/* Agrega la imagen */}
            </div>
            <div className="text-white">
              <h2 className="text-2xl font-bold mb-2">Más de diez años salvando vidas</h2>
              <p className="text-sm">
                Como bombero, he estado involucrado en diversas actividades de rescate y prevención de incendios.
              </p>
            </div>

          </div>

        </div>
      </main>
    </div>
  );
}
