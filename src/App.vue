<template>
  <h1>Test</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'Todomin (Pronounced "too-doo-muhn")',
  components: {
    HelloWorld
  }
})
</script>

<style lang="scss">
@import "./assets/main.scss";

body, html {
  background: #D56CA5;
}
</style>
