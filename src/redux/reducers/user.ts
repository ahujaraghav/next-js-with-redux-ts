import { Reducer } from "react";
import { Action } from "redux";
import ActionTypes from "../config/types";
import { CustomReducer } from "../config";

export interface User {
  isAuthenticated: boolean,
  role: string,
}



const initialState = {
  isAuthenticated: false,
  role: 'undefined',
}

const userReducer: CustomReducer<User> = (state = initialState, action) => {
  const { payload } = action
  switch (action.type) {
    case ActionTypes.LOGIN_USER: {
      return { isAuthenticated: true, role: payload.role }
    }
    default:
      return { ...state }
  }

}

export default userReducer