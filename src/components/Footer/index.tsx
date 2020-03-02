import React, { FC } from 'react';

import Form from '../Form';
import "./styles.css";
import { useSelector } from 'react-redux';

const Footer: FC = () => {
  const state = useSelector(state => state);
  return (
    <footer>
      {console.log(state)}
      <h3>Dados do Cliente</h3>
      <Form />
    </footer>
  );
}

export default Footer;
