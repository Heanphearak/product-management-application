<template>
  <div class="col-3 column">
    <div
      class="card"
      :style="{
        backgroundColor:
          product.quantity < 10 && product.quantity > 0 ? 'yellow' : null,
      }"
    >
      <img :src="product.image" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          {{ product.name }}
        </h5>
        <div>
          {{ product.description }}
        </div>
        <strong :style="{ color: product.quantity == 0 ? 'red' : null }">{{
          product.quantity == 0
            ? "Out of stock"
            : `Quantity: ${product.quantity}`
        }}</strong
        ><br />
        <strong>Price: {{ product.price }}</strong
        ><br /><b />
        <div class="mt-2">
          <button class="btn btn-primary mr" @click="navigator()">Edit</button>
          <button class="btn btn-danger" @click="deleteProduct(product.id)">
            Delete
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  props: ["product"],

  methods: {
    ...mapActions("product", ["deleteProduct"]),

    navigator() {
      this.$router.push({
        name: "edit-product",
        params: { id: this.product.id },
      });
    },
  },
};
</script>

<style>
.column {
  padding: 16px;
}
.mr {
  margin-right: 16px;
}
</style>
