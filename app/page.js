'use client';
import Image from 'next/image';
import Navbar from '../components/navBar/NavBar';
import Footer from '../components/footer/footer';
import View1 from '../components/view1';

export default function Home() {
  return (
    <div>
      <Navbar />
      <View1 />
      <Footer />
    </div>
  );
}
