<template>
  <div>
    <!-- <input id="todo-input" class="form-control form-control-lg" type="text" /> -->
    <button @click="add">Add todo</button>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
import { state } from "../state";

export default defineComponent({
  name: "TodoInput",
  props: {},
  setup: () => {},
  methods: {
    add() {
      state.todos.push({ text: "Hello world!", checked: false });
    },
  },
});
</script>

<style lang="scss" scoped>
#todo-input {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  border: 0;
  border-bottom: 1px solid grey;
  border-radius: 0;
}
</style>
