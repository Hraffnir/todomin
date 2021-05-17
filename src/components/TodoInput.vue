<template>
  <div>
    <input id='todo-input' 
      class='form-control form-control-lg' 
      v-on:keyup.enter='add' 
      v-model='todoText'
      type='text' />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Todo from '../models/todo';
import { addTodo } from '../api/indexeddb.service';

interface State {
  todoText: string
}

export default defineComponent({
  name: 'TodoInput',
  props: {},
  setup: () => {},
  data: (): State => {
    return {
      todoText: ''
    }
  },
  methods: {
    async add() {
      var todo = new Todo(this.todoText);
      await addTodo(todo);
      this.todoText = '';

      // state.todos.push({ text: this.todoText, checked: false });
    },
  },
});
</script>

<style lang='scss' scoped>
#todo-input {
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  border: 0;
  border-bottom: 1px solid grey;
  border-radius: 0;
}
</style>
