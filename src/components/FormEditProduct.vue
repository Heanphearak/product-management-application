<template>
  <div class="item-center mt-4">
    <h3 class="my-4">UPDATE PRODUCT</h3>
    <custom-input
      type="text"
      v-model="input.name"
      label="Name"
      :error="validation.inputName"
    />
    <custom-input
      type="text"
      v-model="input.description"
      label="Description"
      :error="validation.inputDescription"
    />
    <custom-input
      type="text"
      v-model="input.price"
      label="Price"
      :error="validation.inputPrice"
    />
    <custom-input
      type="number"
      v-model="input.quantity"
      label="Quantity"
      :error="validation.inputQuantity"
    />

    <button
      type="button"
      class="btn btn-primary col-3 btn-h"
      @click="onsubmit()"
    >
      Update Product
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CustomInput from "./CustomInput.vue";

export default {
  components: { CustomInput },

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
        inputName: "",
        inputDescription: "",
        inputQuantity: "",
        inputPrice: "",
      },
    };
  },

  async mounted() {
    const item = await this.getProduct(this.$route.params.id);

    this.input = item;

    let user = localStorage.getItem("user");
    if (!user) {
      this.$router.push("/login");
    }
  },

  methods: {
    ...mapActions("product", ["editProduct", "getProduct"]),

    async onsubmit() {
      if (this.validate()) {
        const response = await this.editProduct(this.input);
        if (response) {
          this.$router.push("/");
        }
      }
    },
    validate() {
      let status = true;
      if (!this.input.name) {
        this.validation.inputName = "Enter your product name";
        status = false;
      }
      if (!this.input.description) {
        this.validation.inputDescription = "Enter description";
        status = false;
      }
      if (!this.input.price) {
        this.validation.inputPrice = "Enter product price";
        status = false;
      }
      if (!this.input.quantity) {
        this.validation.inputQuantity = "Enter quantity";
        status = false;
      }
      return status;
    },
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
