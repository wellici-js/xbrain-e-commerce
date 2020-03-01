import { Product } from '../../models';

export const addUser = (user: { name: string, email: string }) => ({
  type: 'ADD_USER',
  payload: {
    name: user.name,
    email: user.email
  }
})

export const addProduct = (product: Product) => ({
  type: 'ADD_PRODUCT',
  payload: {
    id: product.id,
    deadline: product.deadline,
    name: product.name,
    price: product.price,
    in_cash_percent: product.in_cash_percent
  }
})