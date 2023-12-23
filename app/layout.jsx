"use client"
import './globals.css'
import { Inter } from 'next/font/google';
import Footer from './components/footer/Footer';
import Landing from './components/landing/Landing';

const inter = Inter({ subsets: ['latin'] });
// export const metadata = {
//   title: 'Kevin Galeano - Rescatista',
//   description: 'Firefighter - Trainer - Rescuer',
// };

export default function RootLayout({ children }) {
  return (
  <>
      <Landing />
      { children }
    <Footer />
    </>
  );
}