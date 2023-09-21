import Image from 'next/image';
import Link from 'next/link';

export default function View1() {
  return (
    <div>
      <main className="relative min-h-screen mt-14"> {/* Agregar margen superior */}
        {/* Capa de fondo */}
        <video autoPlay muted loop className="absolute inset-0 object-cover w-full h-full">
          <source src="/flames.mp4" type="video/mp4" />
          Tu navegador no soporta el elemento de video.
        </video>

        {/* Capa de contenido */}
        <div className="relative z-0 flex flex-col justify-start items-center h-auto text-white">
          <div id="view1" className={`text-center mt-10 relative z-10`}>
            <h1 className="text-4xl font-bold">Kevin Alexander Galeano Barbosa</h1>
            <p>Bombero - Rescatista - Instructor</p>
          </div>

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

            {/* Contenedor de botones */}
            <div className="mt-8 flex flex-wrap justify-center">
              {[...Array(5)].map((_, index) => (
                <button
                  key={index}
                  className="bg-gray-300 text-gray-600 px-4 py-2 rounded m-2"
                >
                  Button {index + 1}
                </button>
              ))}
            </div>

            {/* Contenedor de párrafos */}
            <div className="mt-8 flex flex-wrap justify-center">
              {[...Array(15)].map((_, index) => (
                <p key={index} className="text-gray-400 w-1/2 p-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
