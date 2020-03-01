import React, { FC, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import data from '../../assets/db/db.json';
import Footer from '../../components/Footer';

import { Product } from '../../models';

const Products: FC = () => {
  const [products, setProducts] = useState<Array<Product>>();

  useEffect(() => {
    setProducts(data.products);
  }, []);

  return (
    <div>
      <h1>Products</h1>
      <div>
        <ul>
          {
            products?.map(product => (
              <li key={product.id}>
                {product.name}
              </li>
            ))
          }
        </ul>
      </div>
      <Link to="/checkout">checkout</Link>
      <Footer />
    </div>
  );
}

export default Products;
