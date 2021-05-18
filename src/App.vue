<template>
  <div class="container">
    <todo-input />

    <todo-list />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { getTodos } from "./api/indexeddb.service";
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import Todo from "./models/todo";
import { state } from "./state";

export default defineComponent({
  name: 'Todomin (Pronounced "too-doo-muhn")',
  components: {
    TodoInput,
    TodoList
  },
  setup: () => {
    const data = ref([] as Todo[]);

    onMounted(async () => {
      const todos = await getTodos() as Todo[];
      state.todos = [...todos];
    })
  },
});
</script>

<style lang="scss">
@import "./assets/main.scss";

body,
html {
  background: #d56ca5;
}
</style>
