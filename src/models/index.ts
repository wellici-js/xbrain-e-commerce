export interface Product {
  name: string;
  price: number;
  id: number;
  deadline: number;
  in_cash_percent: number;
}

export interface Store {
  user: User;
  product: Product
}

export interface User {
  name: string;
  email: string;
}

export interface ActionUser {
  type: string;
  payload: {
    user: {
      name: string;
      email: string;
    }
  }
}