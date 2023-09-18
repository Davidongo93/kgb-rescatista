import Link from 'next/link';
import Image from 'next/image';

export default function Landing() {
  return (
    <div className="min-h-screen relative">
            <Image
            src="/landing.jpeg"
            alt="Next.js Logo"
            layout="fill"
            objectFit="cover"
          />
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center"
        style={{ backgroundImage: 'url("/landing.jpeg")' }}
      ></div>
      
      {/* Contenido superpuesto */}
      <div className="absolute inset-0 flex flex-col justify-center items-center bg-opacity-75 bg-white">
        <h1 className="text-4xl font-bold mb-6">Landing Page</h1>
        <Link 
          href="/home"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          home
        </Link>
      </div>
    </div>
  );
}
