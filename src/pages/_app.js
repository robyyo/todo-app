import '../styles/globals.css';
import Header from '../components/organisms/Header/Header';
import Footer from '../components/organisms/Footer/Footer';
import { SessionProvider } from 'next-auth/react';

function MyApp({ Component, pageProps }) {
  return (
    <SessionProvider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  );
}

export default MyApp;
