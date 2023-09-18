// components/Footer.js
import { useState, useEffect } from 'react';

export default function Footer() {
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
      className={`fixed bottom-0 left-0 w-full p-4 bg-black text-white transition-opacity duration-300 ${
        scrolling ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      <footer className="text-center mb-10">
        <a href="#" className="text-lg mx-4">
          Sitio del Creador
        </a>
        <p>
          By{' '}
          <span className="text-blue-400 font-semibold">DÆV</span>
        </p>
      </footer>
    </nav>
  );
}
