import { useState, useEffect } from 'react';
import styles from './Footer.module.css'; // Importa el archivo CSS module

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

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <nav
      className={`${styles.footer} ${scrolling ? styles['opacity-1'] : styles['opacity-0']} ${
        scrolling ? styles['blur-10px'] : ''
      } ${scrolling ? styles['pointer-events-auto'] : ''}`}
    >
      <footer className="text-center">
        <p>
          &copy; {getCurrentYear()} By{' '}
          <a
            href="https://davidongo93.github.io/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 font-semibold"
          >
            DÆV
          </a>
        </p>
      </footer>
    </nav>
  );
}
