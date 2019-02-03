import { types } from './actions'

const initialState = {
  products: {
    data: [],
    status: null,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.PRODUCTS_GET_ALL_REQUEST:
      return {
        ...state,
        products: {
          ...state.products,
          status: 'loading',
        },
      };

    case types.PRODUCTS_GET_ALL_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          data: action.payload,
          status: 'loaded',
        },
      };

    case types.PRODUCTS_GET_ALL_FAILURE:
      return {
        ...state,
        products: {
          ...state.products,
          status: 'error',
        },
      };

    default:
      return state;
  }
}

export default reducer
