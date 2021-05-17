<template>

  <div class="form-check" v-for="item in data" :key="item.text">
    <input class="form-check-input" type="checkbox" :checked="item.completed" @change="checked(item)">
    <label class="form-check-label" for="flexCheckDefault">
      {{ item.text }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { completeTodo, getTodos } from "../api/indexeddb.service";
import Todo from "../models/todo";

export default defineComponent({
  name: "TodoList",
  props: {},
  setup: () => {
    const data = ref([] as Todo[]);

    onMounted(async () => {
      data.value = await getTodos();
    }) 

    return {
      data
    }
  },
  methods: {
    async checked(todo: Todo) {
      const clonedTodo = Object.assign({} as Todo, todo)
      await completeTodo(clonedTodo);
    }
  }
});
</script>

<style lang="scss" scoped>
</style>
