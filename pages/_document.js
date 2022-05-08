import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from "next/script";

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
          <link href="https://fonts.cdnfonts.com/css/american-captain?styles=15583" rel="stylesheet" />
          <script type="text/javascript" src="/assets/js/colcade2.js"></script>
          <Script strategy="lazyOnload"
            src='https://www.googletagmanager.com/gtag/js?id=G-3P96W5HF7H' />
          <Script strategy="lazyOnload">
            {
              `window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
          
              gtag('config', 'G-3P96W5HF7H');
              `
            }
          </Script >
          {/* <title>Vishnu Sagar Photography</title> */}
          <meta charSet="utf-8" />
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" /> */}
          <link rel="icon" href="/assets/images/icon.jpg" />
          <meta property="og:type" content="Vishnu Sagar photography" />
          <meta property="og:url" content="https://www.vishnusagarphotography.com/" />
          <meta property="og:image:url" content="/assets/images/black-height-updated.png" />
          <meta
            name="keywords"
            content="photography, photographer, photographer in canada, canada photography, canada, 
                    canada photography, india, canada photography  vishnu sagar, vishnu sagar photography, 
                    blacks photography, nude photography, 
                    portrait photography, landscape photography, real estate photography,
                    product photography, wedding photography, street photography, types of photography, maternity photography, 
                    nature photography, car photography, commercial photography, photography hashtags,
                    body photography, long exposure photography"
          />
          <meta
            property="og:title"
            content="Vishnusagar - Commercial Photographer"
          />
          <meta property="og:description" content="Fashion, commercial, portrait and landscape photographer based out of London, Ontario" />
          <meta property="og:image" content="/assets/images/black-height-updated.png" />
          <meta property="og:image:type" content="image/png" />
          <meta property="og:image:width" content="200" />
          <meta property="og:image:height" content="200" />
          <meta property="og:site_name" content="Vishnu Sagar photography" />
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