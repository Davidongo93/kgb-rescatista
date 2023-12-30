"use client"
import { usePathname } from 'next/navigation';
import './globals.css'
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      {path !== '/' && <Navbar/>}
    <body>{children}</body>
    {path !== '/' && <Footer/>}
  </html>
  );
}