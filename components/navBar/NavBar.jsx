import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolling, setScrolling] = useState(false);

  // Verificar si estamos en el lado del cliente antes de usar window
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

  // Verificar si estamos en un dispositivo móvil
  const isMobile = typeof window !== 'undefined' && window.innerWidth <= 768;

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-4 ${
        isMobile ? 'hidden' : ''
      } bg-orange-500 backdrop-blur-lg transition-opacity duration-300 ${
        scrolling ? 'opacity-0 pointer-events-none' : 'opacity-100 pointer-events-auto'
      }`}
    >
      {isMobile && (
        <div className="text-white text-2xl cursor-pointer">
          &#9776;
        </div>
      )}

      {!isMobile && (
        <div>
          <a href="#view1" className="text-lg mx-4">
            View 1
          </a>
          <a href="#view2" className="text-lg mx-4">
            View 2
          </a>
          <a href="#view3" className="text-lg mx-4">
            View 3
          </a>
        </div>
      )}
    </nav>
  );
}
