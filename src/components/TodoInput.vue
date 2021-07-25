<template>
    <div>
        <input id='todo-input' 
            autofocus
            class='form-control form-control-lg' 
            v-on:keyup.enter='add' 
            v-model='todoText'
            type='text' />

        <input type="number" placeholder="Minutes" v-model='todoMinutes' v-on:keyup.enter='add'>
        <input type="number" placeholder="Hours" v-model='todoHours' v-on:keyup.enter='add'>
    </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Todo from '../models/todo';
import { state } from '../state';

interface State {
  todoText: string,
  todoMinutes: number,
  todoHours: number
}

export default defineComponent({
  name: 'TodoInput',
  props: {},
  setup: () => {},
  data: (): State => {
    return {
      todoText: '',
      todoMinutes: 0,
      todoHours: 0
    }
  },
  methods: {
    async add(event: KeyboardEvent) {
      let todo = new Todo(this.todoText)

        todo.minutes = this.todoMinutes;
        todo.hours = this.todoHours;

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
