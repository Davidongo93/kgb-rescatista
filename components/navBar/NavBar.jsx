// Navbar.js
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
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
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 bg-black text-white transition-opacity duration-300 ${
        scrolling ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
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
  );
}
