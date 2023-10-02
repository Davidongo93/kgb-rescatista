"use client"
import { useRouter } from 'next/router';
import Social from '@/components/social/Social';
export default function Landing() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/home');
  };

  return (
      <div className="min-h-screen relative overflow-hidden">
        {/* Video de fondo */}
        <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full">
          <source src="/landanim.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Contenedor del contenido superpuesto */}
        <div className="absolute top-8 right-8 bg-white bg-opacity-80 p-4 rounded-lg">
          <div className="text-white text-center">
            <div className="text-3xl font-bold">Kevin Alexander Galeano Barbosa</div>
            <div className="text-xl">Bombero - Rescatista - Instructor</div>
            <button
              onClick={goToHome}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4 text-center"
            >
              <code className="text-white-400">Explore</code>
            </button>
          </div>
        </div>
          <Social/>
      </div>
  );
}