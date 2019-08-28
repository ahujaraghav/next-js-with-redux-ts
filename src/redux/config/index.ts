import { createStore, combineReducers, Store } from 'redux'
import { persistStore, Persistor, persistReducer, persistCombineReducers } from 'redux-persist'
import DefaultStorage from 'redux-persist/lib/storage'
import userReducer, { User } from '../reducers/user';

import ActionTypes from './types';
import CustomCookieStorage from '../../utils/helpers/customCookieStorage';
import dataReducer, { Data } from '../reducers/data';

export interface StoreState {
  user: User,
  dataLocal: Data,
  dataCookie: Data,
  data: Data
}

export type CustomReducer<T> = (state: T, action: { type: ActionTypes, payload: any }) => T

export function initializeStore(req?: any, res?: any): { store: Store, persistor: Persistor } {


  // pass to server
  const persistCookieConfig = (key: string) => ({
    key,
    storage: CustomCookieStorage(req, res)
  })


  // used in client local storage
  const persistLocalConfig = (key: string) => ({
    key,
    storage: DefaultStorage
  })

  const rootReducer = combineReducers(
    {
      user: persistReducer(persistCookieConfig('user'), userReducer),
      dataCookie: persistReducer(persistCookieConfig('data'), dataReducer),
      dataLocal: persistReducer(persistLocalConfig('data-local'), dataReducer),
      data: dataReducer
    }

  )

  const store: Store = createStore(
    // combineReducers<StoreState>({ user: userReducer })
    rootReducer
  )
  const persistor = persistStore(store, {})

  return { store, persistor }
}

