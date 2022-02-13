<template>
  <nav class="navbar navbar-dark bg-dark navbar-expand-md px-4">
    <!-- <a href="#" class="navbar-brand">Product Managment</a> -->
    <button
      class="navbar-toggler"
      data-bs-toggle="collapse"
      data-bs-target="#navbar"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="navbar-collapse collapse" id="navbar" navbar>
      <div class="navbar-nav">
        <router-link to="/" class="nav-tem nav-link">Home</router-link>
        <router-link to="/products" class="nav-tem nav-link"
          >Create Products</router-link
        >
        <!-- <a class="nav-item nav-link" href="#">Product Detail</a> -->
      </div>
    </div>

    <div>
      <slot name="element">element</slot>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style>
.removeUnderLine {
  text-decoration: none;
}
</style>
