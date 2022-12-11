import '../styles/globals.css';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
