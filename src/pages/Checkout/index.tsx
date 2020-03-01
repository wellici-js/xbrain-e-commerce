import React, { FC, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
// import { Container } from './styles';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../store/actions';

const Checkout: FC = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const [state, setState] = useState("");

  return (
    <div>
      <h1>Checkout</h1>
      <div>
        <h3>Name -> {name}</h3>
      </div>
      <input type="text" onBlur={(e) => setState(e.target.value)} />
      <button onClick={() => {
        dispatch(addTodo(state))
      }}>inserir</button>
      <Link to="/products/123">products</Link>
    </div>
  );
}

export default Checkout;
