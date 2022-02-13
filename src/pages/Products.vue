<template>
  <div>
    <create-product :id="id"/>
  </div>
</template>

<script>
// import ProductCard from "../components/ProductCard.vue";
import CreateProduct from "../components/CreateProduct.vue";
export default {
  components: {  CreateProduct },
  name: "Products",
  props: ["id"],

  mounted() {
      console.log('====> =====>',this.id)
  },

  methods: {},

  computed: {},
};
</script>

<style></style>
