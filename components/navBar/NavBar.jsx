import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleScroll = () => {
        if (window.scrollY > 0) {
          setScrolling(true);
        } else {
          setScrolling(false);
        }
      };

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-2 bg-orange-500 transition-opacity duration-300 ${
        scrolling ? 'backdrop-blur-md bg-opacity-10' : 'opacity-100 bg-opacity-100'
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between items-center">
      <Link href="/home"> 
        <div className="text-white text-2xl">
        &#8962;
        </div>
        </Link>
        <div className="flex space-x-4">
          <Link 
          href="/experiencia"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition inline-block mt-4"
          >Experiencia</Link>
          <Link 
          href="/galeria"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition inline-block mt-4"
          >Galería</Link>
          <Link 
          href="/contacto"
          className="bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-600 transition inline-block mt-4"
          >Contacto</Link>
        </div>
      </div>
    </nav>
  );
}
