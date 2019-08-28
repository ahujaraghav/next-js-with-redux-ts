import React from 'react'
import { Provider } from 'react-redux'
import withReduxStore from '../src/hocs/WithReduxStore';
import NextComponent from 'next/app'
import { Store } from 'redux';

import Head from 'next/head';
import { PersistGate } from 'redux-persist/integration/react';
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
          <link href="/static/css/main.css" rel="stylesheet" />
          <link href="/static/css/bootstrap.css" rel="stylesheet" />
        </Head>

        <Provider store={reduxStore}>

          <Component {...pageProps} />

        </Provider>
      </>
    )
  }
}

export default withReduxStore(MyApp)