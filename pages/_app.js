import RootLayout from "../app/layout.jsx";
import { useRouter } from "next/router.js";
function MyApp({ Component, pageProps }) {
    return( 
<RootLayout>
    <Component {...pageProps} />
</RootLayout>
    );
  }
  
  export default MyApp;