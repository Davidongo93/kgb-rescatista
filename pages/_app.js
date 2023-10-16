import RootLayout from "../app/layout.jsx";
import { useRouter } from "next/navigation";
function MyApp({ Component, pageProps }) {
    const router = useRouter();
    return( 
<RootLayout>
    <Component {...pageProps} />
</RootLayout>
    );
  }
  
  export default MyApp;