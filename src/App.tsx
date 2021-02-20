import React, { useEffect, useState } from "react";
import { Products, Nav, Cart } from "./components";
import { CssBaseline } from "@material-ui/core";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { commerce } from "./lib/commirce";
// import SignUp from "./components/SignUp";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({ total_items: 0 });
  const fetchproducts = async () => {
    const { data } = await commerce.products.list();
    setProducts(data);
  };
  const fechCart = async () => {
    setCart(await commerce.cart.retrieve());
  };
  const handleAddCart = async (productId: number, quantity: number) => {
    const { cart } = await commerce.cart.add(productId, quantity);
    setCart(cart);
  };
  const handleUpdateCartQty = async (productId: any, quantity: any) => {
    const { cart } = await commerce.cart.update(productId, { quantity });
    setCart(cart);
  };
  const handleRemoveFromCart = async (lineItemId: any) => {
    const response = await commerce.cart.remove(lineItemId);
    setCart(response.cart);
  };
  const handleEmptyCart = async () => {
    const response = await commerce.cart.empty();
    setCart(response.cart);
  };
  useEffect(() => {
    fetchproducts();
    fechCart();
  }, []);
  return (
    <Router>
      <div style={{ display: 'flex' }}>
        <CssBaseline />
        <Nav count={cart.total_items} />
        <Switch>
          <Route exact path="/">
            <Products products={products} onAddToCart={handleAddCart} />
          </Route>
          <Route exact path="/cart">
            <Cart
              cart={cart}
              onUpdateCartQty={handleUpdateCartQty}
              onRemoveFromCart={handleRemoveFromCart}
              onEmptyCart={handleEmptyCart}
            />
          </Route>
        </Switch>
        {/* <SignUp/> */}
      </div>
    </Router>
  );
}

export default App;
