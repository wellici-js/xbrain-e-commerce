import { Product, User } from '../../models';

export const addUser = (user: User) => ({
  type: 'ADD_USER',
  payload: {
    ...user
  }
})

export const addProduct = (product: Product) => ({
  type: 'ADD_PRODUCT',
  payload: {
    ...product
  }
})

export const removeProduct = (id: number) => ({
  type: 'REMOVE_PRODUCT',
  payload: {
    id
  }
})

export const clickProduct = (id: number) => ({
  type: 'CLICK_PRODUC',
  payload: {
    id
  }
})

export const resetCart = () => ({
  type: 'RESET_CART'
})