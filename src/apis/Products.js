import APIs from "./APIs";

const END_POINT = "products";

export default {
  createProduct(product) {
    return APIs.post(END_POINT, {
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
    });
  },

  getProducts() {
    return APIs.get(END_POINT);
  },

  deleteProduct(id) {
    return APIs.delete(`${END_POINT}/${id}`);
  },

  getProduct(id) {
    return APIs.get(`${END_POINT}?id=${id}`);
  },

  editProduct(product) {
    return APIs.put(`${END_POINT}/${product.id}`, {
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      image: product.image,
    });
  },
};
