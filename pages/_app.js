import '../styles/globals.css'
import "bootstrap/dist/css/bootstrap.min.css";
import Apphead from "../components/apphead"
import Footer from '../components/footer'
import "../public/assets/css/style.css"
import "../public/assets/css/animation.css"
import "../public/assets/css/header.css"
import "../public/assets/css/slider.css"
import "../public/assets/css/contactme.css"
function MyApp({ Component, pageProps }) {

  return (
    <>
      <Apphead />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp
