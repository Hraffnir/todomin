<template>

  <div class="form-check" v-for="item in todos" :key="item.text">
    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
    <label class="form-check-label" for="flexCheckDefault">
      {{ item.text }}
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
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
