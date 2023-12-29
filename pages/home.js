import Navbar from '../app/components/navBar/NavBar';
import View1 from '../app/components/view1';
import Footer from '../app/components/footer/Footer.jsx';
import RootLayout from '../app/layout';

export default function Home() {
  return (
    <div>
      <RootLayout>
      <Navbar />
      <View1 />
      <Footer />
      </RootLayout>
      </div>
  );
}
