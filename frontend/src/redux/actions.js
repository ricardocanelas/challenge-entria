import API from '../utils/api'

// Action Types

export const APP_GOTO = 'APP_GOTO'
export const APP_GOBACK = 'APP_GOBACK'

export const PRODUCTS_GET_ALL_REQUEST = 'PRODUCTS_GET_ALL_REQUEST'
export const PRODUCTS_GET_ALL_SUCCESS = 'PRODUCTS_GET_ALL_SUCCESS'
export const PRODUCTS_GET_ALL_FAILURE = 'PRODUCTS_GET_ALL_FAILURE'
export const PRODUCTS_SAVE_REQUEST = 'PRODUCTS_SAVE_REQUEST'
export const PRODUCTS_SAVE_SUCCESS = 'PRODUCTS_SAVE_SUCCESS'
export const PRODUCTS_SAVE_FAILURE = 'PRODUCTS_SAVE_FAILURE'
export const PRODUCTS_REMOVE_REQUEST = 'PRODUCTS_REMOVE_REQUEST'
export const PRODUCTS_REMOVE_SUCCESS = 'PRODUCTS_REMOVE_SUCCESS'
export const PRODUCTS_REMOVE_FAILURE = 'PRODUCTS_REMOVE_FAILURE'

// Action creators

export const app = {
  goto: (viewId, params = {}) => ({ type: APP_GOTO, payload: { id: viewId, params } }),
  goback: () => ({ type: APP_GOBACK }),
}

export const product = {
  all: () => {
    return (dispatch) => {
      dispatch({ type: PRODUCTS_GET_ALL_REQUEST });
      return API.products.all().then(data => {
        dispatch({ type: PRODUCTS_GET_ALL_SUCCESS, payload: data });
        dispatch(app.goto('ProductHome'));
      }).catch(error => {
        dispatch({ type: PRODUCTS_GET_ALL_FAILURE, payload: error });
      })
    }
  },
  save: (values) => {
    return (dispatch) => {
      dispatch({ type: PRODUCTS_SAVE_REQUEST });
      return API.products.save(values).then(data => {
        dispatch({ type: PRODUCTS_SAVE_SUCCESS, payload: data });
      }).catch(error => {
        dispatch({ type: PRODUCTS_SAVE_FAILURE, payload: error });
      })
    }
  },
  remove: (values) => {
    return (dispatch) => {
      dispatch({ type: PRODUCTS_REMOVE_REQUEST });
      return API.products.remove(values).then(data => {
        dispatch(app.goto('ProductHome'));
        dispatch({ type: PRODUCTS_REMOVE_SUCCESS, payload: data });
      }).catch(error => {
        dispatch({ type: PRODUCTS_REMOVE_FAILURE, payload: error });
      })
    }
  },
}

export default {
  app,
  product,
}

export const types = {
  APP_GOTO,
  APP_GOBACK,
  PRODUCTS_GET_ALL_REQUEST,
  PRODUCTS_GET_ALL_SUCCESS,
  PRODUCTS_GET_ALL_FAILURE,
  PRODUCTS_SAVE_REQUEST,
  PRODUCTS_SAVE_SUCCESS,
  PRODUCTS_SAVE_FAILURE,
  PRODUCTS_REMOVE_REQUEST,
  PRODUCTS_REMOVE_SUCCESS,
  PRODUCTS_REMOVE_FAILURE,
}
