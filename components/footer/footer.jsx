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

  const footerStyle = {
    opacity: scrolling ? '1' : '0',
    transition: 'opacity 0.3s ease-in-out',
    backdropFilter: scrolling ? 'blur(10px)' : 'none',
    pointerEvents: scrolling ? 'auto' : 'none',
  };

  return (
    <nav
      className="fixed bottom-0 left-0 w-full p-2 bg-transparent text-white transition-opacity duration-300"
      style={footerStyle}
    >
      <footer className="text-center">
        <a
          href="https://davidongo93.github.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-lg mx-2"
        >
          Developer website
        </a>
        <p>
          By{' '}
          <span className="text-blue-400 font-semibold">DÆV</span>
        </p>
      </footer>
    </nav>
  );
}
