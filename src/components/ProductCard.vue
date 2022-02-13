<template>
  <div class="col-3 column" >
    <div class="card" :style="{backgroundColor: product.quantity<10 && product.quantity > 0 ? 'yellow' : null }">
      <img :src="product.image" alt="..." />
      <div class="card-body">
        <h5 class="card-title">
          {{ product.name }}
        </h5>
        <strong>Price: {{ product.price }}</strong
        ><br />
        <strong :style="{color: product.quantity == 0 ? 'red': null}">{{product.quantity == 0 ? "Out of stock" : `Quantity: ${product.quantity}`  }}</strong>
        <p class="card-text">
          {{ product.description }}
        </p>
        <button class="btn btn-primary mr">
          <router-link class="edit" :to="{ name: 'edit-product', params: { id: product.id } }">
            Edit</router-link
          >
        </button>
        <button class="btn btn-danger" @click="deleteProduct(product.id)">
          Delete {{product.id}}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "ProductCard",
  props: ["product"],

  methods: {
    ...mapActions("product", ["deleteProduct"]),
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
.edit {
  text-decoration: none;
  color: white;
}
</style>
