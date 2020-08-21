import Head from 'next/head';
import ThemeContainer from '../contexts/theme/ThemeContainer';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Aura API</title>
      </Head>
      <ThemeContainer>
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  );
}

export default MyApp;
