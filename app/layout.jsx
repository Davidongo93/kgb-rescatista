import './globals.css'
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Kevin Galeano - Rescatista',
  description: 'Firefighter - Trainer - Rescuer',
};
export default function RootLayout({ children }) {

    return (
      <div>
        {children}
     </div>
    )
}
