import 'bootstrap/dist/css/bootstrap.css';
import Layout from '../components/Layout'
import '../styles/globals.scss'
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
}, []);
  return (
    <>
      
      <main className='container'>
      <Layout>
  <Component {...pageProps} />
  </Layout>
      </main>
    </>
  )
}

export default MyApp