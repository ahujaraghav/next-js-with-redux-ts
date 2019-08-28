import { CookieStorage } from 'redux-persist-cookie-storage'
import Cookies from 'cookies-js'
import CookiesServer from 'cookies'
import NodeCookiesWrapper from './nodeCookieWrapper'
import DefaultStorage from 'redux-persist/lib/storage'


export default function CustomCookieStorage(req, res) {
  let cookieStorage: any
  if (typeof window === 'undefined') {
    if (!req) {
      console.warn("request object is required in ssr store initalization")
      cookieStorage = DefaultStorage
    } else {
      const cookieJar = new NodeCookiesWrapper(CookiesServer(req, res))
      cookieStorage = new CookieStorage(cookieJar)
    }
  } else {
    cookieStorage = new CookieStorage(Cookies)
  }

  return cookieStorage
}
