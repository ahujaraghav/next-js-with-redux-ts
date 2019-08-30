import React from 'react'
import { Provider } from 'react-redux'
import withReduxStore from '../src/hocs/WithReduxStore';
import NextComponent from 'next/app'
import { Store } from 'redux';
import "../src/scss/custom/main.scss"

import Head from 'next/head';
import { Persistor } from 'redux-persist';

interface MyProps {
  reduxStore: Store,
  persistor: Persistor
}

class MyApp extends NextComponent<MyProps> {

  // no need to call getInitialProps on Component, as we extended NextComponent, it is taken care of.

  render() {
    const { Component, pageProps, reduxStore, persistor } = this.props

    return (
      <>
        <Head>
          {/* <link href="/static/css/main.css" rel="stylesheet" />
          <link href="/static/css/bootstrap.css" rel="stylesheet" /> */}
          <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" />
        </Head>

        <Provider store={reduxStore}>

          <Component {...pageProps} />


        </Provider>
      </>
    )
  }
  componentDidMount() {

    document.body.style.visibility = "visible"
    document.body.style.opacity = '1'

  }
}

export default withReduxStore(MyApp)