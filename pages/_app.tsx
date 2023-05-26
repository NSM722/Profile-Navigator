import 'bootstrap/dist/css/bootstrap.css';
import '/styles/globals.css'
import { Inter } from 'next/font/google'
import Layout from '../src/components/layout/Layout';
import { AppProps } from 'next/app';

const inter = Inter({ subsets: ['latin'] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
