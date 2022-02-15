import Products from "../../../apis/Products";

export const createProduct = ({ commit }, product) => {
  return new Promise((resolve) => {
    Products.createProduct(product).then((response) => {
      commit("SET_PRODUCT", response.data);
      resolve(response);
    });
  });
};

export const getAllProducts = ({ commit }) => {
  Products.getProducts().then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = ({ commit }, productId) => {
  return new Promise((resolve)=> {
    Products.getProduct(productId).then((response) => {
      commit("SET_PRODUCT", response.data[0]);
      resolve(response.data[0])
    });
  }) 
  
};

export const deleteProduct = ({ commit }, productId) => {
  Products.deleteProduct(productId);
  commit("REMOVE_PRODUCT", productId);
};

export const editProduct = ({ commit }, product) => {
  return new Promise((resolve) => {
    Products.editProduct(product).then((response) => {
      commit("EDIT_PRODUCT", response.data);
      resolve(response);
    });
  });
};
