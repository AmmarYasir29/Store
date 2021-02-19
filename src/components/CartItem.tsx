import React from "react";
import {
  Typography,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
} from "@material-ui/core";

import styles from "../styles/cartItem.module.css";

const CartItem = (props: any) => {
  const handleUpdateCartQty = (lineItemId: any, newQuantity: any) =>
    props.onUpdateCartQty(lineItemId, newQuantity);
  const handleRemoveFromCart = (lineItemId: number) =>
    props.onRemoveFromCart(lineItemId);

  return (
    <Card className="cart-item">
      <CardMedia
        image={props.item.media.source}
        className={styles.media}
        // alt={item.name}
      />
      <CardContent className={styles.cardContent}>
        <Typography variant="h4">{props.item.name}</Typography>
        <Typography variant="h5">
          {props.item.line_total.formatted_with_symbol}
        </Typography>
      </CardContent>
      <CardActions className={styles.cardActions}>
        <div className={styles.buttons}>
          <Button
            type="button"
            size="small"
            onClick={() =>
              handleUpdateCartQty(props.item.id, props.item.quantity - 1)
            }
          >
            -
          </Button>
          <Typography>&nbsp;{props.item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() =>
              handleUpdateCartQty(props.item.id, props.item.quantity + 1)
            }
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => handleRemoveFromCart(props.item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
