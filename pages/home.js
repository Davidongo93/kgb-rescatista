import Navbar from '../components/navBar/NavBar';
import View1 from '../components/view1';
import Footer from '../components/footer/Footer.jsx';
import RootLayout from '@/app/layout';

export default function Home() {
  return (
    <RootLayout>
      <Navbar />
      <View1 />
      <Footer />
      </RootLayout>
  );
}
