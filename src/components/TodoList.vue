<template>

  <div class="form-check" v-for="item in todos" :key="item.text">
    <input class="form-check-input" type="checkbox" :checked="item.completed" @change="checked(item)">
    <label class="form-check-label" for="flexCheckDefault">
      {{ item.text }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { completeTodo } from "../api/indexeddb.service";
import Todo from "../models/todo";
import { state } from "../state";

export default defineComponent({
  name: "TodoList",
  props: {},
  methods: {
    async checked(todo: Todo) {
      const clonedTodo = Object.assign({} as Todo, todo)
      await completeTodo(clonedTodo);
    }
  },
  computed: {
    todos() {
      console.log(state.todos)
      return state.todos
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
