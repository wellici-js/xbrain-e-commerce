import { Product } from '../../models';

interface Action {
  type: string;
  payload: Product; 
}

const INITIAL_STATE = {
  cart: [],
  total_buy: 0
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
    default:
      return state;
  }
}

export default addProduct;