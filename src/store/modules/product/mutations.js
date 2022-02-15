export const SET_PRODUCTS = (state, products) => {
  state.products = products;
};

export const SET_PRODUCT = (state, product) => {
  state.product = product;
};

export const REMOVE_PRODUCT = (state, product) => {
  state.products = state.products.filter((item) => {
    return item.id !== product;
  });
};

export const EDIT_PRODUCT = (
  state,
  product
) => {
  console.log('edit')
  state.product =  product
//   const item = state.products.find(item => item.id === id);
//     Object.assign(item, {id, name, description, price, quantity, image });
};
