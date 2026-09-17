
import { useState, useEffect } from 'react';
import styles from './Footer.module.css';

export default function Footer() {
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 2;
      setShowFooter(isAtBottom);
    };

    handleScroll(); // páginas cortas: ya están al fondo al montar
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <nav
      className={`${styles.footer} ${showFooter ? styles['opacity-1'] : styles['opacity-0']} ${
        showFooter ? styles['blur-10px'] : ''
      } ${showFooter ? styles['pointer-events-auto'] : ''}`}
    >
      <footer className="text-center">
        <p>
          &copy; {getCurrentYear()} By{' '}
          <a
            href="https://daev.space/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.link}
          >
            DÆV
          </a>
        </p>
      </footer>
    </nav>
  );
}
