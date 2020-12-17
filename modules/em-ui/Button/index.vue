<template>
  <button :class="type">
    <slot></slot>
  </button>
</template>

<script>
// Type

export default {
  name: "EmButton",
  props: {
    type: {
      type: String,
      default: "default",
      validator: function (value) {
        // 这个值必须匹配下列字符串中的一个
        return ["primary", "info", "default", "danger", "warning"].includes(
          value
        );
      },
    },
  },
  setup(props, { emit }) {
    // console.log(props.type);
  },
};
</script>

<style scoped>
/* 根据type添加不同的样式 */
button {
  border: none;
  outline: none;
  padding: 6px;
  border-radius: 4px;
}

.default {
  background-color: #fff;
}

.primary {
  background-color: rgb(38, 148, 38);
  color: #fff;
}

.info {
  background-color: rgb(99, 53, 226);
  color: #fff;
}

.danger {
  background-color: rgb(255, 0, 0);
  color: #fff;
}
.warning {
}

/* shape */
.square {
  border-radius: 0px;
}
.round {
  border-radius: 10px;
}
</style>