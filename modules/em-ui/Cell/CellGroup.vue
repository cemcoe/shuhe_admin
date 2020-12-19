<template>
  <div class="cell-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "EmCellGroup",
};
</script>
<style scoped>
.cell-group {
  box-shadow: 0 0 4px rgb(223, 215, 215);
}
</style>