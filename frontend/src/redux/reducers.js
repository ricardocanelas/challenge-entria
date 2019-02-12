import { types } from './actions'

const initialState = {
  history: [],
  view: { id: null, params: {} },
  products: {
    data: [],
    status: null,
  },
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.APP_GOTO:
      return {
        ...state,
        view: action.payload,
        history: [
          ...state.history,
          { ...action.payload },
        ],
      };

    case types.APP_GOBACK:
      return {
        ...state,
        view: { ...state.history[state.history.length - 2] },
        history: [
          ...state.history.slice(0, -1 ),
        ],
      };

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

    case types.PRODUCTS_SAVE_SUCCESS:
      return {
        ...state,
        products: {
          ...state.products,
          data: [
            ...state.products.data.filter(product => product.id !== action.payload.id),
            action.payload,
          ],
        },
      };

      case types.PRODUCTS_REMOVE_SUCCESS:
      return {
        ...state,
        view: {
          id: 'ProductHome',
          params: {},
        },
        products: {
          ...state.products,
          data: [
            ...state.products.data.filter(product => product.id !== action.payload.id),
          ],
        },
      };

    default:
      return state;
  }
}

export default reducer
