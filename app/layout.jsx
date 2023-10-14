"use client"
import { Router } from "next/router";
import './globals.css'
import { Inter } from 'next/font/google';
import Footer from './components/footer/Footer';
import Social from './components/social/Social';
import Landing from './components/landing/Landing';

const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//   title: 'Kevin Galeano - Rescatista',
//   description: 'Firefighter - Trainer - Rescuer',
// };

export default function RootLayout({ children }) {
  const router = Router;
  console.log(router.pathname);
  return (
  <>
      <Landing />
      { children }
    <Footer />
    </>
  );
}