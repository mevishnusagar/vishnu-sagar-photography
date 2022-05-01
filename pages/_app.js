import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Apphead from "../components/apphead"
import Footer from '../components/footer'
import "/public/assets/css/style.css"
import "/public/assets/css/animation.css"
import "/public/assets/css/header.css"
import "/public/assets/css/slider.css"
import "/public/assets/css/contactme.css"
import Script from "next/script";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Script strategy="lazyOnload"
        src='https://www.googletagmanager.com/gtag/js?id=G-3P96W5HF7H' />
      <Script strategy="lazyOnload">
        {
          `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
      
          gtag('config', 'G-3P96W5HF7H');
          `
        }
      </Script >
      <Apphead />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
