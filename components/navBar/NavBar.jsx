'use client'
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
      style={{ zIndex: 1000 }} // Añade esta línea para ajustar el z-index
    >
      <div className="flex justify-between items-center">
        <div className="text-white text-2xl">
          &#9776;
        </div>
        <Link href="/about">
          <button className="bg-transparent text-white text-lg p-2 rounded hover:bg-white hover:text-orange-500 transition ml-2">
            About
          </button>
        </Link>
      </div>
    </nav>
  );
}
