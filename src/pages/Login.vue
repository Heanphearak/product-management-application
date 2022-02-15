<template>
  <div class="item-center">
    <h3 class="mb-4 m-auto mt-4">Login</h3>
    <custom-input
      type="text"
      v-model="input.username"
      label="Username"
      :error="validation.inputId"
    />
    <custom-input
      type="password"
      v-model="input.password"
      label="Password"
      :error="validation.inputPw"
    />

    <button
      type="button"
      class="btn btn-primary col-3 btn-h"
      to="/"
      @click="onsubmit()"
    >
      Login
    </button>
  </div>
</template>

<script>
import { mapActions } from "vuex";
import CustomInput from "../components/CustomInput.vue";
export default {
  components: { CustomInput },

  data() {
    return {
      input: { username: "", password: "" },
      validation: {
        inputId: "",
        inputPw: "",
      },
    };
  },

  mounted() {
    let user = localStorage.getItem("user");
    if (user) {
      this.$router.push("/");
    }
  },

  methods: {
    ...mapActions(["userLogin"]),

    async onsubmit() {
      if (this.validate()) {
        const response = await this.userLogin({
          username: this.input.username,
          password: this.input.password,
        });
        if (response.data.length > 0) {
          localStorage.setItem("user", JSON.stringify(response.data[0]));
          this.$router.push("/");
        }
      }
    },
    validate() {
      let status = true;
      if (!this.input.username) {
        this.validation.inputId = "Enter your username";
        status = false;
      }
      if (!this.input.password) {
        this.validation.inputPw = "Enter your password";
        status = false;
      }
      return status;
    },
  },

  computed: {
    // ...mapState['user']
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
