import React, { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { Store } from '../../models';
import "./styles.css";

import image from '../../assets/images/purchase.png';

const Checkout: FC = () => {
  const history = useHistory();
  const state: any = useSelector<Store>(state => state.user);
  return (
    <div className="card">
      <h2>{state?.name},</h2>
      <p>Sua compora no valor
        <strong>R$ 200,00</strong>
        foi finalizada com sucesso
      </p>
      <img src={image} alt="" />
      <button className="new-buy" onClick={() => {
        history.push("/");
      }}>INICIAR NOVA COMPRA</button>
    </div>
  );
}

export default Checkout;
