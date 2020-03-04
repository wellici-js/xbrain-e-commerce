import React, { FC, useMemo, useState } from 'react';
import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Icon
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Product, Store } from '../../models';
import { addProduct, removeProduct, clickProduct } from '../../store/actions';

import useStyles from './styles';

const CardComponent: FC<Product> = ({ name, url, price, in_cash_percent, deadline, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const state: any = useSelector<Store>(state => state.product);
  const inCash = useMemo(() =>
    price - (price * (in_cash_percent / 100.0)),
    [price, in_cash_percent]);
  const parcel = useMemo(() => (price/12).toFixed(2), [price]);

  return (
    <Card className={classes.root}
      onClick={() => {
        dispatch(clickProduct(id))
        setClicked(!clicked)
      }}
      onMouseMove={() => {
        dispatch(clickProduct(id))
        setClicked(!clicked)
      }}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          className={classes.media}
          image={url}
          title={name}
        />
        <CardContent>
          <Typography gutterBottom className={classes.name}>
            {name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Em até 12x de R$ { parcel }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            R$ {inCash} à vista (10% de desconto)
          </Typography>
        </CardContent>
      </CardActionArea>
      {
        state.isClicked && id === state.isClicked ? (
          <CardActions className={classes.actions}>
            <Button size="small" color="primary"
              onClick={() => {
                dispatch(addProduct({
                  name,
                  price,
                  deadline,
                  id,
                  in_cash_percent,
                  url
                }));
              }}
            >
              <Icon style={{ color: "#546e7a"}}>add_circle</Icon>
        </Button>

            <Typography className={classes.add}>
              ADICIONAR
        </Typography>

            <Button size="small" color="primary"
              onClick={() => {
                dispatch(removeProduct(id));
              }}
            >
              <Icon style={{ color: "#546e7a"}}>remove_circle</Icon>
        </Button>
          </CardActions>
        ) : null
      }
    </Card>
  );
}

export default CardComponent;