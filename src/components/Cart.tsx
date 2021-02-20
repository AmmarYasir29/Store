import React from "react";
import { Container, Typography, Button, Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import styles from "../styles/cart.module.css";

const Cart = ({
  cart,
  onUpdateCartQty,
  onRemoveFromCart,
  onEmptyCart,
}: any) => {
  if (!cart.line_items) return <div>"Loading..."</div>;

  const renderEmptyCart = () => (
    <Typography variant="h5">
      You have no items in your shopping cart,
      <Link className={styles.link} to="/">
        start adding some
      </Link>
      !
    </Typography>
  );

  const renderCart = () => (
    <>
      <Grid container spacing={3}>
        {cart.line_items.map((lineItem: any) => (
          <Grid item xs={12} sm={4} key={lineItem.id}>
            <CartItem
              item={lineItem}
              onUpdateCartQty={onUpdateCartQty}
              onRemoveFromCart={onRemoveFromCart}
            />
          </Grid>
        ))}
      </Grid>
      <div className={styles.cardDetails}>
        <Typography variant="h4" gutterBottom>
          Subtotal: {cart.subtotal.formatted_with_symbol}
        </Typography>
        <div>
          <Button
            className={styles.emptyButton}
            size="large"
            type="button"
            variant="contained"
            color="secondary"
            onClick={() => onEmptyCart()}
            style={{ marginRight: "20px" }}
          >
            Empty cart
          </Button>
          <Button
            className={styles.checkoutButton}
            size="large"
            type="button"
            variant="contained"
            color="primary"
          >
            <a
              className={styles.contaxt}
              href="http://m.me/Hawraa.Gallery"
              target="_blank"
              rel="noreferrer"
            >
              Checkout
            </a>
          </Button>
        </div>
      </div>
    </>
  );

  return (
    <Container>
      <div className={styles.toolbar} />
      <Typography className={styles.title} variant="h3" gutterBottom>
        Your Shopping Cart
      </Typography>
      {!cart.line_items.length ? renderEmptyCart() : renderCart()}
    </Container>
  );
};
export default Cart;
