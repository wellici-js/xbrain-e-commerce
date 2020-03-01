import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Store } from '../../models';
// import { addTodo } from '../../store/actions';

import "./styles.css";
import { useSelector } from 'react-redux';

const Checkout: FC = () => {
  const history = useHistory();
  const state: any = useSelector<Store>(state => state.user);
  return (
    <div className="card">
      <h1>Checkout</h1>
      <h3>Olá {state?.name}</h3>
      {console.log(state, "state")}
      <button className="new-buy" onClick={() => {
        history.push("/");
      }}>inserir</button>
    </div>
  );
}

export default Checkout;
