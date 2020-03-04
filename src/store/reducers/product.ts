import produce from 'immer';
import { Product } from '../../models';

interface Action {
  type: string;
  payload: Product; 
}

const INITIAL_STATE = {
  cart: [],
  total_buy: 0,
  isClicked: null
}

const addProduct = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return {
        cart: [
          ...state.cart,
          {
            ...action.payload
          }
        ]
      }
    case 'REMOVE_PRODUCT':
      return produce(state, (draft: any) => {
        const productIndex = draft.cart.findIndex((p: any) => p.id === action.payload.id);
        if (productIndex >= 0) {
          draft.cart.splice(productIndex, 1);
        }
      })
    case 'CLICK_PRODUC':
      return {
        ...state,
        isClicked: action.payload.id
      }
    case 'RESET_CART':
      return {
        ...state,
        cart: []
      }
    default:
      return state;
  }
}

export default addProduct;