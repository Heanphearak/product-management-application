<template>
  <div class="item-center mt-4" v-if="product">
    <h3 class="my-4">UPDATE PRODUCT</h3>
    <custom-input
      type="text"
      v-model="input.name"
      label="Name"
      :error="validation.inputId"
    />
    <custom-input
      type="text"
      v-model="input.description"
      label="Description"
      :error="validation.inputPw"
    />
    <custom-input
      type="text"
      v-model="input.price"
      label="Price"
      :error="validation.inputId"
    />
    <custom-input
      type="number"
      v-model="input.quantity"
      label="Quantity"
      :error="validation.inputPw"
    />

    <button
      type="button"
      class="btn btn-primary col-3 btn-h"
      to="/dashboard"
      @click="
        editProduct({
          id: input.id,
          name: input.name,
          description: input.description,
          quantity: input.quantity,
          price: input.price,
          image: input.image,
        });
        navigator();
      "
    >
      Update Product
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import CustomInput from "./CustomInput.vue";
export default {
  components: { CustomInput },
  name: "EditProduct",
  props: ["productId"],

  data() {
    return {
      input: {
        id: "",
        name: "",
        description: "",
        quantity: "",
        price: "",
        image: "https://via.placeholder.com/150x100",
      },
      validation: {
        inputId: "",
        inputPw: "",
      },
    };
  },

  computed: {
    ...mapState("product", ["product"]),
  },

  async mounted() {
    console.log('==>',this.$route.params.id)
    this.getProduct(this.$route.params.id);
    this.getAllProducts()

    console.log("form=======>editdata", this.product);

   this.input = this.product;

    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push("/login");
    }
  },

  // created() {
  //   this.getProduct(this.productId);
  // },

  methods: {
    ...mapActions("product", ["getProduct", "editProduct", "getAllProducts"]),
    navigator() {
      this.$router.push("/");
    },
    // validate() {
    //     if (!this.input.username && !this.input.password) {
    //     this.validation.inputId = "Enter your username";
    //     this.validation.inputPw = "Enter your password";
    //   }else if (!this.input.username){
    //     this.validation.inputId = "Enter your username";
    //   }else if (!this.input.password){
    //     this.validation.inputPw = "Enter your password";
    //   }
    // }
  },
};
</script>

<style>
.btn-h {
  height: 54px;
  margin: auto;
}
.item-center {
  text-align: center;
}
</style>
