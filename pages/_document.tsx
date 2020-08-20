import Document, { DocumentProps, Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document<DocumentProps> {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;600;700&display=swap" rel="stylesheet" />  
        </Head>
        <body style={{ backgroundImage: "url(https://silly-mirzakhani-8c1e9e.netlify.app/static/media/bg-intro-mobile.3e78c71a.png)", backgroundColor: "hsl(0, 100%, 73.9%)" }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;