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

  return (
    <Card>
      <CardMedia image={props.item.media.source} className={styles.media} />
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
              props.onUpdateCartQty(props.item.id, props.item.quantity - 1)
            }
          >
            -
          </Button>
          <Typography>&nbsp;{props.item.quantity}&nbsp;</Typography>
          <Button
            type="button"
            size="small"
            onClick={() =>
              props.onUpdateCartQty(props.item.id, props.item.quantity + 1)
            }
          >
            +
          </Button>
        </div>
        <Button
          variant="contained"
          type="button"
          color="secondary"
          onClick={() => props.onRemoveFromCart(props.item.id)}
        >
          Remove
        </Button>
      </CardActions>
    </Card>
  );
};

export default CartItem;
