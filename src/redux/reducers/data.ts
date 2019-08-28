import ActionTypes from "../config/types";
import { CustomReducer } from "../config";

export interface Data {
  records: number
}

const initialState: Data = {
  records: 0
}

const dataReducer: CustomReducer<Data> = (state = initialState, action) => {
  switch (action.type) {
    case ActionTypes.INCREMENT:
      return { records: state.records + 1 }
    case ActionTypes.LOGIN_USER:
      return { records: 0 }
    default:
      return { ...state }
  }
}

export default dataReducer