import  ErrorBoundary  from 'next/dist/client/components/error-boundary';
import './globals.css'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>{children}</body>
  </html>
  );
}