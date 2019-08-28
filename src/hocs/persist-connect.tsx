import React from 'react'
import { connect, MapStateToProps, MapDispatchToProps } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from 'redux-persist';

/** Not used, can be deleted */

interface InitialProps {
  persistor: Persistor
}

export default function persistConnect(mapStateToProps?, mapDispatchToProps?) {

  return function customConnect(Component) {

    class persistConnect extends React.Component<InitialProps> {

      static async getInitialProps(appContext) {
        let appProps = {}
        if (typeof Component.getInitialProps === 'function') {
          appProps = await Component.getInitialProps(appContext)
        }

        return {
          ...appProps
        }
      }

      render() {

        const { persistor } = this.props
        return (
          <PersistGate persistor={persistor}>
            <Component {...this.props} />
          </PersistGate>
        )
      }

    }

    return connect(mapStateToProps, mapDispatchToProps)(persistConnect)
  }
}

