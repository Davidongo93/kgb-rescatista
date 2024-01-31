import Link from 'next/link';
import Image from 'next/image';

const Contacto = () => {
  return (
    <>
    
      <div
        className="h-screen flex flex-col justify-center items-center"
      >
        <div className="fixed">
  {/* Contenido de tu componente */}
  <Image
    src="/three.jpg"
    alt="Imagen de fondo"
    width={1920}
    height={1080}
    objectFit="cover"
    quality={100}
  />
</div>

        
        <div className="bg-white bg-opacity-80 p-6 rounded-lg shadow-md text-center text-gray-800 fixed">
          <h1 className="text-3xl font-bold mb-4">Contacto</h1>
          <div className="flex flex-col items-left mb-4">
            <div className="flex items-center mb-2">
              <i className="fas fa-envelope text-xl mr-2"></i>
              <p>espeletiafria@gmail.com</p>
            </div>
            <div className="flex items-center mb-2">
              <i className="fas fa-phone text-xl mr-2"></i>
              <p>+57 3003485579</p>
            </div>
            <div className="flex items-center">
              <i className="fas fa-map-marker-alt text-xl mr-2"></i>
              <p>Bogotá, Colombia, South America</p>
            </div>
          </div>
        </div>
          <Link href="/home">
            <div className="flex items-center bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition mt-4 cursor-pointer">
              <i className="fas fa-home mr-2"></i>
            </div>
          </Link>
      </div>
    </>
  );
};

export default Contacto;
