import React, { FC, memo } from 'react';

import Form from '../Form';
import "./styles.css";

const Footer: FC = () => {
  return (
    <footer>
      <h3>Dados do Cliente</h3>
      <Form />
    </footer>
  );
}

export default memo(Footer);
