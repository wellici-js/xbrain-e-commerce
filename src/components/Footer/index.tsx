import React, { FC, useState } from 'react';
import { useStore, useDispatch } from 'react-redux';

import { addUser } from '../../store/actions';

const Footer: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const store = useStore();
  const dispatch = useDispatch();
  return (
    <div>
      <input type="text" onBlur={(e) => setName(e.target.value)} placeholder="name" />
      <input type="email" onBlur={(e) => setEmail(e.target.value)} placeholder="email" />
      <button onClick={() => {
        dispatch(addUser({
          name,
          email
        }));
      }}>Adicionar</button>
      <h3>Price total</h3>
      <h3>User: </h3>
      {console.log(store.getState(), "footer")}
    </div>
  );
}

export default Footer;
