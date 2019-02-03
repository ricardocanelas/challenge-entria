import API from '../helpers/API'

// Action Types

export const PRODUCTS_GET_ALL_REQUEST = 'PRODUCTS_GET_ALL_REQUEST'
export const PRODUCTS_GET_ALL_SUCCESS = 'PRODUCTS_GET_ALL_SUCCESS'
export const PRODUCTS_GET_ALL_FAILURE = 'PRODUCTS_GET_ALL_FAILURE'

// Product-Action creators

export const product = {
  all: () => {
    return (dispatch) => {
      dispatch({ type: PRODUCTS_GET_ALL_REQUEST });
      API.products.all().then(data => {
        dispatch({ type: PRODUCTS_GET_ALL_SUCCESS, payload: data });
      }).catch(error => {
        dispatch({ type: PRODUCTS_GET_ALL_FAILURE, payload: error });
      })
    }
  },
}

export default {
  product,
}

export const types = {
  PRODUCTS_GET_ALL_REQUEST,
  PRODUCTS_GET_ALL_SUCCESS,
  PRODUCTS_GET_ALL_FAILURE,
}
