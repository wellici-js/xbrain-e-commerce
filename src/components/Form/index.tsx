import React, { FC, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addUser } from '../../store/actions';

import "./styles.css";

const Form: FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event: any) => {
    event.preventDefault();
    console.log(name, email, sexo);
    dispatch(addUser({
      name,
      email
    }));
  }

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text"
        onBlur={(e) => setName(e.target.value)}
        placeholder="name" />
      <input type="email"
        onBlur={(e) => setEmail(e.target.value)}
        placeholder="email" />
      <select name="sexo" id="sexo"
        value={sexo}
        onChange={(e) => setSexo(e.target.value)}>
        <option value="sexo">Sexo</option>
        <option value="m">Masculino</option>
        <option value="f">Feminino</option>
        <option value="n">Prefiro não dizer</option>
      </select>
      <input type="submit" value="Finalizar compora" />
    </form>
  );
}

export default Form;