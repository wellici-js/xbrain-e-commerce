import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import {
  makeStyles,
  createStyles,
  Theme,
  Grid,
} from '@material-ui/core';

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
      flexDirection: 'column'
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

  useEffect(() => {
    setProducts(data.products);
  }, []);

  return (
    <div className={classes.root}>
      <h1>Products</h1>
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
      <Link to="/checkout">checkout</Link>
      <Footer />
    </div>
  );
}

export default Products;
