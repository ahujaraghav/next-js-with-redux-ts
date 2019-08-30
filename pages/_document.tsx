import Document, { Html, Head, Main, NextScript } from 'next/document'
import { AppContext } from 'next/app';
import { CustomPageContext } from '../src/hocs/WithReduxStore';

class MyDocument extends Document {
  static async getInitialProps(ctx: any) {

    const initialProps = await Document.getInitialProps(ctx)
    console.log(ctx.reduxStore.getState())
    return { ...initialProps }
  }

  render() {
    return (
      <Html>
        <Head />
        <style>{`
      :root {
        --color-primary: orange;
      }
    `}</style>
        <body style={{ opacity: 50, transition: "opacity ease-in 0.2s" }}>
          <Main />
          <NextScript />

        </body>
      </Html>
    )
  }


}

export default MyDocument