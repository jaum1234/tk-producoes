import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>            
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
            <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700;900&family=Poppins:wght@300;400;500;700;900&display=swap" rel="stylesheet"/>
        </Head>
        <body>
          <Main />
          <NextScript/>
        </body>
      </Html>
    )
  }
}

export default MyDocument;