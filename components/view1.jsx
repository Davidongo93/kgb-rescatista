import Image from 'next/image';

export default function View1() {
  return (
    <div>
      {/* Navbar */}
      <nav className="relative top-0 left-0 w-full p-4 bg-black text-white">
        {/* Agrega tus enlaces de navegación aquí */}
        <a href="#view1" className="text-lg mx-4">
          View 1
        </a>
        <a href="#view2" className="text-lg mx-4">
          View 2
        </a>
        <a href="#view3" className="text-lg mx-4">
          View 3
        </a>
      </nav>

      {/* Contenido de la vista */}
      <main className="relative min-h-screen">
        {/* Fondo de la imagen */}
        <div className="absolute inset-0">
          <Image
            src="/landing.jpeg"
            alt="Next.js Logo"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Contenedor principal */}
        <div className="relative z-10 flex flex-col justify-between min-h-screen py-10 bg-gradient-to-b from-transparent to-black bg-opacity-50 text-white">
          {/* Vista 1 */}
          <div
            id="view1"
            className={`text-center mt-10`}
          >
            <h1 className="text-4xl font-bold">Vista 1</h1>
          </div>

          {/* Contenido central */}
          <section className="text-center mt-10">
            <p className="text-xl">
              explore <code className="text-yellow-400">erolpxe</code>
            </p>
          </section>

          <footer className="text-center mb-10">
            <p>
              By{' '}
              <span className="text-blue-400 font-semibold">DÆV</span>
            </p>
          </footer>
        </div>
      </main>

      {/* Estilo para el efecto de resaltado en el Navbar */}
      <style jsx>{`
        nav {
          display: flex;
          justify-content: center;
        }

        a {
          text-decoration: none;
          color: white;
          transition: color 0.3s ease-in-out;
        }

        a:hover {
          color: #ff00ff; /* Cambia el color de resaltado al hacer hover a tu elección */
        }
      `}</style>
    </div>
  );
}
