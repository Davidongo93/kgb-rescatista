import './globals.css'
import { useRouter } from 'next/router';
import { Inter } from 'next/font/google';
import Landing from '../pages/landing';
import Home from '@/pages/home';

const inter = Inter({ subsets: ['latin'] });

// export const metadata = {
//   title: 'Kevin Galeano - Rescatista',
//   description: 'Firefighter - Trainer - Rescuer',
// };

export default function RootLayout({ children }) {
  const router = useRouter();

  // Verifica la ruta actual para renderizar condicionalmente
  if (router.pathname === '/') {
    return (
      <div>
        <Landing />
      </div>
    );
  } else if (router.pathname === '/home') {
    return (
 <Home></Home>
    );
  }

  // Si ninguna condición se cumple, muestra solo el contenido
  return <div>{children}</div>;
}
