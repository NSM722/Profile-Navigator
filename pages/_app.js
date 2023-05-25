import 'bootstrap/dist/css/bootstrap.css';
import '@/styles/globals.css'
import Layout from '@/src/components/layout/Layout';

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
