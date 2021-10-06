import Router from 'next/router'
import Head from 'next/head'
import 'tailwindcss/tailwind.css';
import NProgress from 'nprogress';

Router.events.on('routeChangeStart', (url) => {
  NProgress.start();
})

Router.events.on('routeChangeComplete', () => NProgress.done());
Router.events.on('routeChangeError', () => NProgress.done())

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="https://unpkg.com/nprogress@0.2.0/nprogress.css" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
