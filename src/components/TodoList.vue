<template>
  <div>My list of todos!</div>

  <li v-for="item in todos" :key="item.text">
    {{ item.text }}
  </li>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { state } from "../state";

export default defineComponent({
  name: "TodoList",
  props: {},
  setup: () => {},
  computed: {
    todos() {
      return state.todos
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
