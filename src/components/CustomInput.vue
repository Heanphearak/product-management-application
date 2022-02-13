<template>
    <div class="form-floating mb-3 col-3 m-auto ">
      <input
        v-on="$listeners" 
        :type="type"
        :value="value" 
        class="form-control input-h"
        @input="$emit('update', $event.target.value)"
      />
      <label>{{label}}</label>
      <p class="error">{{error}}</p>
    </div>
</template>

<script>
// import { mapActions } from "vuex";
export default {
  name: "CustomInput",

  props: ["value", "label", "type", "error"],
    model: {
      prop: "value",
      event: "update"
    },

  data() {
    return {
        
    }
  },

  mounted() {
    // let user = localStorage.getItem("user");
    // if (user) {
    //   this.$router.push("/");
    // }
  },

  methods: {
    // ...mapActions(["userLogin"]),
  },

  computed: {},
};
</script>

<style>
.btn-h {
  height: 54px;
  margin: auto;
}
.item-center{
     text-align: center;
}
.input-h{
    height: 45px;
}
.error {
  color: red;
  text-align: start;
  margin-top: 8px;
}
</style>
