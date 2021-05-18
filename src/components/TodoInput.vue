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
import { defineComponent, getCurrentInstance } from 'vue';
import Todo from '../models/todo';
import { state } from '../state';

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
    async add(event: KeyboardEvent) {
      let todo = new Todo(this.todoText)

      if (event.shiftKey && event.key === "Enter"){
        todo.sequenceNumber = 1;
        let todosCopy = [...state.todos]
          .sort((prev, next) => prev.sequenceNumber - next.sequenceNumber)
          .map((i) => { i.sequenceNumber++; return i; });

        todosCopy.unshift(todo);

        state.todos = [...todosCopy];
      } else {
        todo.sequenceNumber = this.getNextSequenceNumber();
        state.todos.push(todo);
      } 

      this.todoText = '';
      console.log('After', state.todos);
    },
    getNextSequenceNumber() {
      if(state.todos.length === 0) { return 1 }

      return state.todos.reduce((prev, cur) => {
        return (prev.sequenceNumber > cur.sequenceNumber) ?
          prev : cur
      }).sequenceNumber++;
    }
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
