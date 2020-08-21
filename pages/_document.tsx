import Document, {
  DocumentProps,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document';

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <meta name="description" content="" />
          <meta property="og:site_name" content="Aura API" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="Formulário" />
          <meta property="og:description" content="q se foda" />
          <meta property="og:url" content="https://aura-api.vercel.app/" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body
          style={{
            backgroundImage: 'url(/background.jpg)',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
