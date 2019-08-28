import React from 'react'
import { initializeStore } from '../redux/config'
import { Store } from 'redux';
import NextComponent, { AppContext } from 'next/app'
import { NextComponentType, NextPageContext } from 'next';
import { Persistor } from 'redux-persist';

export interface CustomPageContext extends NextPageContext {
  reduxStore: Store,
  persistor: Persistor
}

interface CustomAppContext extends AppContext {
  ctx: CustomPageContext
}

const isServer = typeof window === 'undefined'

// Called for every route
function getOrCreateStore(req?, res?): { store: Store, persistor: Persistor } {
  // Always make a new store if server, otherwise state is shared between requests
  if (isServer) {
    return initializeStore(req, res)
  }

  // Client side store initialization
  if (!window['redux-store']) {
    window['redux-store'] = initializeStore()
  }

  // returned on every route change
  return window['redux-store']
}

export default (Component: any) => {
  return class AppWithRedux extends React.Component {

    static async getInitialProps(appContext: CustomAppContext) {

      const completeStore = getOrCreateStore(appContext.ctx.req, appContext.ctx.res)

      // Provide the store to getInitialProps of pages
      appContext.ctx.reduxStore = completeStore.store
      appContext.ctx.persistor = completeStore.persistor

      let appProps = {}

      await new Promise((resolve, reject) => {
        let { bootstrapped } = completeStore.persistor.getState()

        if (bootstrapped) {
          resolve()
        }

        completeStore.persistor.subscribe(() => {
          let { bootstrapped } = completeStore.persistor.getState()
          if (bootstrapped) {
            resolve()
          }

        })

      })

      if (typeof Component.getInitialProps === 'function') {
        // appProps = { pageProps: {} }, internally by next component
        appProps = await Component.getInitialProps(appContext)
      }

      return {
        ...appProps,
        reduxStore: completeStore.store,
        persistor: completeStore.persistor
      }

    }

    reduxStore: Store
    persistor: Persistor
    constructor(props) {
      super(props)

      this.reduxStore = props.reduxStore
      this.persistor = props.persistor

      if (!props.reduxStore.dispatch || !props.persistor.dispatch) {
        const completeStore = getOrCreateStore()
        this.reduxStore = completeStore.store
        this.persistor = completeStore.persistor
      }
      // on first request, getInitProps is called on server and therefore store is not available via props
      // getOrCreateStore will always create store on server side, on client side it will create store if not there or return the previously created store.

    }

    render() {
      return <Component {...this.props} reduxStore={this.reduxStore} persistor={this.persistor} />
    }
  }
}