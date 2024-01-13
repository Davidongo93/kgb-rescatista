import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHome,
  faBriefcase,
  faImage,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import Link from "next/link";

const Navbar = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full p-2 bg-orange-500 transition-opacity duration-300 ${
        scrolling
          ? "backdrop-blur-md bg-opacity-10"
          : "opacity-100 bg-opacity-100"
      }`}
      style={{ zIndex: 1000 }}
    >
      <div className="flex justify-between items-center">
        <Link href="/home">
          <div className="text-white text-2xl">
            <FontAwesomeIcon icon={faHome} />
          </div>
        </Link>
        <div className="flex items-center space-x-4">
          <Link href="/experiencia" title="Experiencia">
            <FontAwesomeIcon icon={faBriefcase} className="text-white text-lg transition duration-300 transform hover:scale-110" />
          </Link>
          <Link href="/galeria" title="Galería">
            <FontAwesomeIcon icon={faImage} className="text-white text-lg transition duration-300 transform hover:scale-110" />
          </Link>
          <Link href="/contacto" title="Contacto">
            <FontAwesomeIcon icon={faEnvelope} className="text-white text-lg transition duration-300 transform hover:scale-110" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
