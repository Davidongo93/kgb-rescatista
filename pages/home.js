// pages/home.js (Home)
import Navbar from '../components/navBar/NavBar';
import View1 from '../components/view1';
import Footer from '../components/footer/footer';
import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <Navbar />
      <View1 />
      <Footer />
      <Link href="/">
        Go to Landing
      </Link>
    </div>
  );
}
