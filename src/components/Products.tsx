import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import styles from "../styles/products.module.css";
// import { useEffect } from "react";
// import { commerce } from "../lib/commirce";
// import { productStore, cartStore } from "../store/store";

const Products = (props: any) => {
  const products = props.products;
  
  // const cart = cartStore.cart;
  const cart = [{ id: 1, name: "t-shirt", price: "10$", image: "" }];

  // const fetchproduct = async () => {
  // const { data } = await commerce.products.list();
  // productStore.setProducts(data);
  // };
  // useEffect(() => {}, []);

  return (
    <main className={styles.content}>
      <div className={styles.toolbar}></div>
      <Grid container justify="center" spacing={4}>
        {products.map((product: any) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={props.onAddToCart}/>
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
