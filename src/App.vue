<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>

    <div class="button" v-for="(type, index) in types" :key="index">
      <em-button :type="type">button</em-button>
    </div>

    <em-cell-group>
      <em-cell title="Cell title" value="Content" />
      <em-cell title="Cell title" value="Content" label="Description" />
    </em-cell-group>
  </div>
  <router-view />
</template>

<script>
export default {
  setup() {
    const types = ["primary", "info", "default", "danger", "warning"];

    return {
      types,
    };
  },
};
</script>

<style>
</style>
