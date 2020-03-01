import React, { FC } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector, useStore } from 'react-redux';

interface Store {
  todo: [
    {
      id: number;
      text: string;
    }
  ]
}

const Products: FC = () => {
  const { id } = useParams();
  const todo: any = useSelector<Store>(state => state.todo);
  const state = useStore().getState();
  return (
    <div>
      {console.log("oi", todo, state)}
      <h1>Products</h1>
      <div>
        <h3>Params -> {id}</h3>

      </div>
      <ul>
        {todo.map((item: any) => (
          <li key={item.id}>{item.text}</li>
        ))}
      </ul>
      <Link to="/checkout/wellici">checkout</Link>
    </div>
  );
}

export default Products;
