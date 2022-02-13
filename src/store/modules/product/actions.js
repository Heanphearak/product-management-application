import Products from "../../../apis/Products";

export const createProduct = (
  { commit },
  { name, description, price, quantity, image }
) => {
  Products.createProduct({ name, description, price, quantity, image });
  commit("SET_PRODUCT", { name, description, price, quantity, image });
};

export const getAllProducts = ({ commit }) => {
  Products.getProducts().then((response) => {
    commit("SET_PRODUCTS", response.data);
  });
};

export const getProduct = async ({ commit }, productId) => {
  await Products.getProduct(productId).then((response) => {
    console.log("111===>", response.data[0]);
    commit("SET_PRODUCT", response.data[0]);
  });
};

export const deleteProduct = ({ commit }, productId) => {
  commit("REMOVE_PRODUCT", productId);
  Products.deleteProduct(productId);
};

export const editProduct = (
  { commit },
  { id, name, description, price, quantity, image }
) => {
  commit("EDIT_PRODUCT", { id, name, description, price, quantity, image });
  Products.editProduct({ id, name, description, price, quantity, image });
};

