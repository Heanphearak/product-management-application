<template>
  <div class="item-center mt-4">
      <h3 class="my-4">ADD NEW PRODUCT</h3>
    <custom-input type="text"  v-model="input.name" label="Name" :error="validation.inputId"/>
    <custom-input type="text"  v-model="input.description" label="Description" :error="validation.inputPw"/>
    <custom-input type="text" v-model="input.price" label="Price" :error="validation.inputId"/>
    <custom-input type="number"  v-model="input.quantity" label="Quantity" :error="validation.inputPw"/>

    <button
      type="button"
      class="btn btn-primary col-3 btn-h"
      to="/dashboard"
      @click="createProduct({name: input.name,description: input.description, quantity: input.quantity, price: input.price, image: input.image}); navigator()"
    >
      Create Product
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CustomInput from "./CustomInput.vue";
export default {
  components: { CustomInput },
  name: "CreateProduct",

  data() {
    return {
      input: { name: "", description: "", quantity: "", price: "",image: "https://via.placeholder.com/150x100" },
      validation: {
        inputId: "",
        inputPw: "",
      },
    };
  },

  mounted() {
    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push("/login");
    }
  },

  methods: {
    ...mapActions("product",["createProduct"]),
    navigator(){
        this.$router.push('/')
    }
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

  computed: {},
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
