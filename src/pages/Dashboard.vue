<template>
  <div>
    <product-list />
  </div>
</template>

<script>
import ProductList from "../components/ProductList.vue";
export default {
  components: { ProductList },

  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push("/login").catch(() => {});
    }
  },
};
</script>

<style></style>
