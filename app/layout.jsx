"use client"
import { usePathname } from 'next/navigation';
import './globals.css'
import Navbar from './components/navBar/NavBar';
import Footer from './components/footer/Footer';
import Social from './components/social/Social';

export default function RootLayout({ children }) {
  const path = usePathname();
  return (
    <html lang="en">
      <body>
    {path !== '/' && <Navbar/>}
    {children}
    {path !== '/home' && <Social/>}
    
    {path !== '/' && <Footer/>}
    </body>
  </html>
  );
}