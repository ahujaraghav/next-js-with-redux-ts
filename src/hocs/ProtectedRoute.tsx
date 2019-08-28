import React, { Component } from 'react'
import Router from 'next/router'
import { connect } from 'react-redux';
import { CustomPageContext } from './WithReduxStore';
import { StoreState } from '../redux/config';
import { NextComponentType } from 'next';

/** Type Definations */
interface AppProps {
  pageProps: {}
}

export type RouteCheck = (state: StoreState) => boolean


/** Implement your own default route checking function */
const defaultCheck: RouteCheck = (state) => {
  // should return boolean
  return state.user.role === 'admin'
}

/** Redirect url incase of authentication failure */
const REDIRECT_URL = "/login"


/** Actual Logic, no need to change */
export default function (Component: NextComponentType, routeChecker: RouteCheck = defaultCheck) {

  class ProtectedRoute extends React.Component<AppProps> {

    static async getInitialProps(pageContext: CustomPageContext): Promise<AppProps> {
      const res = pageContext.res
      if (!routeChecker(pageContext.reduxStore.getState())) {
        if (typeof window === 'undefined') {
          res.writeHead(302, {
            Location: REDIRECT_URL
          });
          res.end();
        } else {
          Router.replace(REDIRECT_URL)
        }
      }

      let appProps = {}
      if (typeof Component.getInitialProps === 'function') {
        appProps = await Component.getInitialProps(pageContext)
      }
      return { pageProps: { ...appProps } }
    }

    render() {
      return <Component {...this.props.pageProps} />
    }
  }

  const mapStateToProps = (state: StoreState) => {
    return { state }
  }

  return connect(mapStateToProps)(ProtectedRoute)
}