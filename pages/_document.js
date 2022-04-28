import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head>
          <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" ></link>
          <link href="https://fonts.cdnfonts.com/css/american-captain?styles=15583" rel="stylesheet"/>
          <script type="text/javascript" src="assets/js/colcade2.js"></script>
          {/* <title>Vishnu Sagar Photography</title> */}
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <link rel="icon" href="assets/images/icon.jpg" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument