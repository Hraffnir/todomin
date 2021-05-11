<template>
    <div>
        <input id="todo-input" class="form-control form-control-lg" type="text" />
    </div>
</template>

<script lang="ts">
import { ref, defineComponent } from 'vue';

export default defineComponent({
  name: 'TodoInput',    
  props: {
  },
  setup: () => {
  }
})
</script>

<style lang="scss" scoped>
#todo-input {
    background-color: rgba(0,0,0,0);
    box-shadow: none;
    border: 0;
    border-bottom: 1px solid grey;
    border-radius: 0;
}
</style>
