import RootLayout from "../app/layout.jsx";

function MyApp({ Component, pageProps }) {

    return( 
<RootLayout>
    <Component {...pageProps} />
</RootLayout>
    );
  }
  
  export default MyApp;