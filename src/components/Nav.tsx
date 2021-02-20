import React from "react";
import {
  AppBar,
  Typography,
  Badge,
  Toolbar,
  IconButton,
} from "@material-ui/core";
import { AddShoppingCart } from "@material-ui/icons";
import img from "../assets/store.svg";
import nav from "../styles/nav.module.css";
import { Link, useLocation } from "react-router-dom";

const Nav = (props: any) => {
  const location = useLocation();

  return (
    <>
      <AppBar position="fixed" color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="./"
            variant="h6"
            className={nav.appBar}
            color="inherit"
          >
            <img
              src={img}
              height="25px"
              alt="Store icon"
              className={nav.image}
            />
            Blue Flower
          </Typography>
          <div className={nav.grow}></div>
          {location.pathname === "/" && (
            <div className={nav.Button}>
              <IconButton
                component={Link}
                to="./cart"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge badgeContent={props.count} color="secondary">
                  <AddShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Nav;
