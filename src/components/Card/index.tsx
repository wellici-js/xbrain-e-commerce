import React, { FC, useMemo } from 'react';
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
import { Product } from '../../models';

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
  }
});

const CardComponent: FC<Product> = ({ name, url, price, in_cash_percent }) => {
  const classes = useStyles();
  const inCash = useMemo(() =>
    price - (price * (in_cash_percent / 100.0)),
    [price, in_cash_percent]);

  return (
    <Card className={classes.root}>
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
            {console.table([price, in_cash_percent, inCash])}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.actions}>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}

export default CardComponent;