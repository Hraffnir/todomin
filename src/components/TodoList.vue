<template>

  <div v-on:drag="testDragHandler" class="todo-container">
    <div draggable="true" class="form-check" v-for="item in todos" :key="item.text">
      <input class="form-check-input" type="checkbox" :checked="item.completed" @change="checked(item)">
      
      <label v-bind:class="{strikethrough: item.completed}" class="form-check-label" for="flexCheckDefault">
        {{ item.text }}
      </label>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { updateTodo } from "../api/indexeddb.service";
import Todo from "../models/todo";
import { state } from "../state";

export default defineComponent({
  name: "TodoList",
  props: {},
  methods: {
    async checked(todo: Todo) {
      todo.completed = !todo.completed;
      const clonedTodo = Object.assign({} as Todo, todo)
      await updateTodo(clonedTodo);
    },
    testDragHandler(ele: any) {
      console.log(ele)
    }
  },
  computed: {
    todos() {
      return state.todos
    }
  }
});
</script>

<style lang="scss" scoped>
.strikethrough {
  text-decoration: line-through;
}
</style>
