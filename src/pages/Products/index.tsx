import React, { FC, useState, useEffect } from 'react';
import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
  Divider
} from '@material-ui/core';
import { useDispatch } from 'react-redux';

import { clickProduct } from '../../store/actions';
import data from '../../assets/db/db.json';
import Footer from '../../components/Footer';
import Card from '../../components/Card';

import { Product } from '../../models';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      overflow: 'hidden'
    },
    card: {
      padding: theme.spacing(1),
      textAlign: 'center',
    },
    item: {
      flex: 'initial',
      margin: 'auto'
    }
  })
);

const Products: FC = () => {
  const [products, setProducts] = useState<Array<Product>>();
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    setProducts(data.products);
  }, []);

  return (
    <div className={classes.root}
      onClick={() => {
        dispatch(clickProduct(0));
      }}
    >
      <h1>Products</h1>
      <Divider component="h1" />
      <Grid container spacing={2}>
        {
          products?.map(product => (
            <Grid
              item xs={12} sm={6} md={4} lg={3}
              className={classes.item}
              key={product.id}>
              <Card
                key={product.id}
                name={product.name}
                url={product.url}
                price={product.price}
                in_cash_percent={product.in_cash_percent}
                deadline={product.deadline}
                id={product.id}
              />
            </Grid>
          ))
        }
      </Grid>
      <Footer />
    </div>
  );
}

export default Products;
