import create from "zustand";

type Product = {
  products: [];
  setProducts: (by: any[]) => void; // type array of obj
};

type Cart = {
  cart: [];
  setCart: (by: any[]) => void; // type array of obj
};

const productStore = create<Product>((set) => ({
  products: [],
  setProducts: (value: any) => set({ products: value }),
}));

const cartStore = create<Cart>((set) => ({
  cart: [],
  setCart: (value: any) => set({ cart: value }),
}));

export { productStore, cartStore };
