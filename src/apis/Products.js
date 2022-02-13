import APIs from "./APIs";

const END_POINT = "products";

export default {
  createProduct({ name, description, price, quantity, image }) {
    return APIs.post(END_POINT, {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      image: image,
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

  editProduct({ id, name, description, price, quantity, image }) {
    return APIs.put(`${END_POINT}/${id}`, {
      name: name,
      description: description,
      price: price,
      quantity: quantity,
      image: image,
    });
  },
};
