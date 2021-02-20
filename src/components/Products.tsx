import React from "react";
import { Grid } from "@material-ui/core";
import Product from "./Product";
import styles from "../styles/products.module.css";
// import { productStore, cartStore } from "../store/store";

const Products = (props: any) => {
  return (
    <main className={styles.content}>
      <div className={styles.toolbar}></div>
      <Grid container justify="center" spacing={4}>
        {props.products.map((product: any) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product} onAddToCart={props.onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
