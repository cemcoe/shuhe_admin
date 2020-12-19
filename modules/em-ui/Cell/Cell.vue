<template>
  <div class="cell">
    <div class="meta">
      <div class="left title">{{ title }}</div>
      <div class="right value">{{ value }}</div>
    </div>

    <div class="label">{{ label }}</div>
  </div>
</template>
<script>
export default {
  name: "EmCell",
  props: {
    title: String,
    value: String,
    label: String,
  },
  setup(props) {},
};
</script>

<style scoped>
.cell {
  background-color: #fff;
  padding: 6px;
}
.meta {
  display: flex;
  justify-content: space-between;
}
.meta .value {
  color: rgb(119, 113, 113);
}
.label {
  color: rgb(122, 116, 116);
}
</style>