import React, { FC, useMemo, useState } from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { Product, Store } from '../../models';
import { addProduct, removeProduct, clickProduct } from '../../store/actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    minHeight: 290
  },
  media: {
    maxHeight: 120,
    objectFit: "contain"
  },
  name: {
    fontsize: 10
  },
  actions: {
    marginBottom: 0
  },
  add: {
    backgroundColor: '#019cdf',
    width: 150,
    height: 32,
    textAlign: 'center',
    alignSelf: 'center',
    paddingTop: 5
  }
});

const CardComponent: FC<Product> = ({ name, url, price, in_cash_percent, deadline, id }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [clicked, setClicked] = useState(false);
  const state: any = useSelector<Store>(state => state.product);
  const inCash = useMemo(() =>
    price - (price * (in_cash_percent / 100.0)),
    [price, in_cash_percent]);

  return (
    <Card className={classes.root}
      onClick={() => {
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
            Em até 12x de R$100
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
              +
        </Button>

            <Typography className={classes.add}>
              ADICIONAR
        </Typography>

            <Button size="small" color="primary"
              onClick={() => {
                dispatch(removeProduct(id));
              }}
            >
              -
        </Button>
          </CardActions>
        ) : null
      }
    </Card>
  );
}

export default CardComponent;