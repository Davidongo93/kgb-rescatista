import RootLayout from '../app/layout.jsx';
import Landing from '../app/components/landing/Landing.jsx';
import { useRouter } from "next/navigation";

function MyApp({ Component, pageProps }) {
router = useRouter();
  return (
    <>
      <RootLayout router= {useRouter}>
        <Component {...pageProps} />
        <Landing/>
      </RootLayout>
    </>
  );
}

export default MyApp;
