<template>
  <div class="flex">
    <input type="text" v-model="search" class="input-align-center" placeholder="search..."/>
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
    };
  },

  computed: {
    ...mapState("product", ["products"]),
    filteredProducts() {
      return this.products.filter((product) =>
        product.name.toLowerCase().includes(this.search.toLowerCase())|| 
        product.description.toLowerCase().includes(this.search.toLowerCase())
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
.input-align-center{
    right: 200px;
    position:absolute;
    top: 13px;
}
</style>
