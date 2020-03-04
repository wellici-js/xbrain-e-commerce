import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../store/actions';
import {
  withStyles,
  createStyles,
  Theme,
  InputBase,
  NativeSelect,
  FormControl,
  InputLabel,
  makeStyles,
} from '@material-ui/core';

import { useHistory } from 'react-router-dom';

import "./styles.css";

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.background.paper,
      border: '1px solid #ced4da',
      fontSize: 16,
      padding: '10px 26px 10px 12px',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  }),
)(InputBase);

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    margin: {
      margin: theme.spacing(1),
    },
  }),
);

const Form: FC = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [sexo, setSexo] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const state: any = useSelector(state => state);

  const handleSubmit = (event: any) => {
    event.preventDefault();
    dispatch(addUser({
      name,
      email,
      sexo
    }));
    history.push("/checkout");
  }

  return (
    <form className="form-container">
      <div className="form-fields">
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="field-name">Nome</InputLabel>
          <BootstrapInput id="field-name"
            value={name}
            onChange={(event: React.ChangeEvent<{ value: string }>) => setName(event.target.value)} />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="field-email">Email</InputLabel>
          <BootstrapInput id="field-email"
            value={email}
            onChange={(event: React.ChangeEvent<{ value: string }>) => setEmail(event.target.value)} />
        </FormControl>
        <FormControl className={classes.margin}>
          <InputLabel htmlFor="field-sexo">Sexo</InputLabel>
          <NativeSelect
            id="field-sexo"
            value={sexo}
            onChange={(event: React.ChangeEvent<{ value: string }>) => setSexo(event.target.value)}
            input={<BootstrapInput />}
          >
            <option value="">Sexo</option>
            <option value="m">Masculino</option>
            <option value="f">Feminino</option>
            <option value="o">Outro</option>
          </NativeSelect>
        </FormControl>
      </div>
      <div className="total">
        <h2>Total: R$ {state.product.total_buy}</h2>
        <button className="button-finish" onClick={handleSubmit}>Finalizar compra</button>
      </div>
    </form>
  );
}

export default Form;