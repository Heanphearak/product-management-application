<template>
  <div>
    <div></div>
    <product-list/>
  </div>
</template>

<script>
import ProductList from '../components/ProductList.vue';
export default {
  components: {ProductList  },
  name: "Dashboard",

  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push("/login").catch(() => {});
    }
  },

  methods: {},

  computed: {},
};
</script>

<style></style>
