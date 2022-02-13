<template>
  <div class="item-center">
    <h3 class="mb-4 m-auto mt-4">Login</h3>
    <!-- <div class="form-floating mb-3 col-3 m-auto">
      <input
        v-model="username"
        type="email"
        class="form-control"
        id="floatingInput"
        placeholder="name@example.com"
      />
      <label for="floatingInput">Username</label>
    </div> -->
    <!-- <div class="form-floating col-3 mb-4 m-auto">
      <input
        v-model="password"
        type="password"
        class="form-control"
        id="floatingPassword"
        placeholder="Password"
      />
      <label for="floatingPassword">Password</label>
    </div> -->
    <custom-input type="text" v-model="input.username" label="Username" :error="validation.inputId"/>
    <custom-input type="password" v-model="input.password" label="Password" :error="validation.inputPw"/>

    <button
      type="button"
      class="btn btn-primary col-3 btn-h"
      to="/dashboard"
      @click="userLogin({ username: input.username, password: input.password }); validate()"
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
  name: "Login",

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
    validate() {
        if (!this.input.username && !this.input.password) {
        this.validation.inputId = "Enter your username";
        this.validation.inputPw = "Enter your password";
      }else if (!this.input.username){
        this.validation.inputId = "Enter your username";
      }else if (!this.input.password){
        this.validation.inputPw = "Enter your password";
      }
    }
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
