import { useRouter } from 'next/router';
import RootLayout from '@/app/layout';

export default function Landing() {
  const router = useRouter();

  const goToHome = () => {
    router.push('/home');
  };

  return (
    <RootLayout>
      <div className="min-h-screen relative overflow-hidden">
        {/* Video de fondo */}
        <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full">
          <source src="/landingAnimation.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Contenido superpuesto */}
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
          <div>
            <div className="text-3xl font-bold">Kevin Alexander Galeano Barbosa</div>
            <div className="text-xl">Bombero - Rescatista - Instructor</div>
            <button
              onClick={goToHome}
              className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4 text-center"
            >
              Home
            </button>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
