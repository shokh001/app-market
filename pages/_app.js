import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.scss'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../components/Navbar';
import HeaderTop from '../components/HeaderTop';
import Category from '../components/Category';
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <HeaderTop />
      <Navbar />
      <Category />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
