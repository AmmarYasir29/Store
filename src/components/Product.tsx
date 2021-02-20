import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import React from "react";
import styles from "../styles/product.module.css";
const Product = ({ product, onAddToCart }: any) => {
  return (
    <Card className={styles.root}>
      <CardMedia
        className={styles.media}
        title={product.name}
        image={product.media.source}
      />
      <CardContent>
        <div className={styles.cardContent}>
          <Typography variant="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography variant="h5">
            {product.price.formatted_with_symbol}
          </Typography>
        </div>
        <Typography
          dangerouslySetInnerHTML={{ __html: product.description }}
          variant="body2"
          color="textSecondary"
        />
      </CardContent>
      <CardActions disableSpacing className={styles.cardActions}>
        <IconButton
          arial-lable="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};
export default Product;
