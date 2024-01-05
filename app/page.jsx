"use client"
import { CldImage } from 'next-cloudinary';
import Link from 'next/link';

export default function Page() {
  return (
    <>
      <div className="min-h-screen relative overflow-hidden">
        {/* Video de fondo */}
        <CldImage
          cloudname={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
          publicid="c3nfuqyxau6tvnezmxx5"
          width="1920"
          height="1080"
          crop="fill"
          className="absolute inset-0 object-cover w-full h-full"
        />

        {/* Imagen de respaldo si el video no puede ser reproducido */}
        <CldImage
          cloudname={process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}
          publicid="lcltkvub9xm9wsnw01sf"
          width="1920"
          height="1080"
          crop="fill"
          className="absolute inset-0 object-cover w-full h-full hidden"
          alt="Fallback Image"
        />

        {/* Contenedor del contenido superpuesto */}
        <div className="absolute top-8 right-8 ml-8 bg-white bg-opacity-80 p-4 rounded-lg">
          <div className="text-white text-center">
            <div className="text-3xl font-bold">Kevin Alexander Galeano Barbosa</div>
            <div className="text-xl">Bombero - Rescatista - Instructor</div>
            <Link href="/home">
              <button
                className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4 text-center"
              >
                <code className="text-white-400">Explore</code>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
