import produce from 'immer';
import { getItem } from 'utils/localStorage';
import {
  FETCH_AUTHENTICATED_USER_SUCCESS,
  LOGOUT_SUCCESS,
  SET_TOKEN,
  SESSION_EXPIRED,
  SET_LANGUAGE
} from './constants';

export const initialState = {
  token: getItem('token') || null,
  user: null,
  language: 'SRB'
};

/* eslint-disable default-case */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    console.log(action);
    switch (action.type) {
      case FETCH_AUTHENTICATED_USER_SUCCESS:
        draft.user = action.user;
        break;
      case LOGOUT_SUCCESS:
      case SESSION_EXPIRED:
        draft.user = null;
        draft.token = null;
        break;
      case SET_TOKEN:
        draft.token = action.token;
        break;
      case SET_LANGUAGE:
        return { ...state, language: action.language };
    }
  });

export default appReducer;
