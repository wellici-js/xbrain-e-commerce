export interface Product {
  name: string;
  price: number;
  id: number;
  deadline: number;
  in_cash_percent: number;
  url: string;
}

export interface Store {
  user: User;
  product: Product
}

export interface User {
  name: string;
  email: string;
  sexo: string;
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