<template>
  <div>
    <form-edit-product :productId="id"/>
    <!-- <div>{{id}}</div> -->
  </div>
</template>

<script>
// import {mapState,mapActions} from 'vuex'
import FormEditProduct from "../components/FormEditProduct.vue";
export default {
  components: { FormEditProduct },
  name: "Products",
  props: ["id"],

  computed: {
        // ...mapState("product", ["product"]),
  },

  mounted() {
    // this.getProduct(this.id)
  },

  methods: {
    //   ...mapActions("product", ["getProduct", "editProduct"]),
  },

  
};
</script>

<style></style>
