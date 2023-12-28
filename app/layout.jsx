import './globals.css'

import { Metadata } from 'next'
 
export const metadata = Metadata = {
  title: 'Next.js',
}
export default function RootLayout({ children }) {
  return (
  <>
  { children }
    </>
  );
}