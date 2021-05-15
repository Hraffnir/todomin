<template>
  <div class="container">
    <todo-input />

    <todo-list />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";

export default defineComponent({
  name: 'Todomin (Pronounced "too-doo-muhn")',
  components: {
    TodoInput,
    TodoList
  },
});
</script>

<style lang="scss">
@import "./assets/main.scss";

body,
html {
  background: #d56ca5;
}

.container {
  // background-color: blue;
}
</style>
