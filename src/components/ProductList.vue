<template>
  <div class="container">
    <div class="row mt-4 justify-content-center">
      <div class="col-2">
      <select
        class="form-select"
        v-model="selectedValue"
        aria-label="Default select example"
      >
        <option selected>Search By</option>
        <option value="price">Price</option>
        <option value="quantity">Quantity</option>
      </select>
      </div>
      <input
        type="text"
        v-model="search"
        class="col-3"
        placeholder="search..."
      />
    </div>

    <div class="d-flex px-2 flex-wrap mt-4">
      <product-card
        v-for="product in filteredProducts"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
import ProductCard from "./ProductCard.vue";
import { mapState, mapActions } from "vuex";
export default {
  name: "ProductList",
  components: {
    ProductCard,
  },

  data() {
    return {
      search: "",
      selectedValue: "",
    };
  },

  computed: {
    ...mapState("product", ["products"]),

    filteredProducts() {
      const item = this.selectedValue;
      return this.products.filter((product) =>
        item == "price"
          ? product.price.toLowerCase().includes(this.search.toLowerCase())
          : item == "quantity"
          ? product.quantity.toLowerCase().includes(this.search.toLowerCase())
          : product.name.toLowerCase().includes(this.search.toLowerCase()) ||
            product.description
              .toLowerCase()
              .includes(this.search.toLowerCase())
      );
    },
  },

  mounted() {
    this.getAllProducts();
  },
  methods: {
    ...mapActions("product", ["getAllProducts"]),
  },
};
</script>

<style>
.row {
  margin: 0 -5px;
}
.input-align-center {
  right: 200px;
  position: absolute;
  top: 13px;
}
</style>
