import { createStore } from "vuex";

// Define the structure of a product
export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
}

// Define the structure of the store's state
export interface State {
  cart: Product[];
}

const store = createStore<State>({
  state: {
    cart: [], // Initialize the cart as an empty array
  },
  mutations: {
    // Mutation to add a product to the cart
    addToCart(state, product: Product) {
      state.cart.push(product);
    },
    // Mutation to remove a product from the cart by ID
    removeFromCart(state, productId: number) {
      state.cart = state.cart.filter((item) => item.id !== productId);
    },
  },
  actions: {
    // Action to commit the addToCart mutation
    addToCart({ commit }, product: Product) {
      commit("addToCart", product);
    },
    // Action to commit the removeFromCart mutation
    removeFromCart({ commit }, productId: number) {
      commit("removeFromCart", productId);
    },
  },
  getters: {
    // Getter to retrieve all items in the cart
    cart: (state) => state.cart,
    // Getter to calculate the total price of items in the cart
    totalPrice: (state) =>
      state.cart.reduce((sum, item) => sum + item.price, 0),
  },
});

export default store;
