<template>
  <div id="app" class="ui container">
    <Equation></Equation>
    <calc-output></calc-output>
    <Keypad></Keypad>
  </div>
</template>

<script>
import Keypad from './components/Keypad';
import Equation from './components/Equation';
import Output from './components/Output';

export default {
  name: 'app',
  components: {
    Keypad,
    Equation,
    'calc-output': Output,
  },
};
</script>

<style>
#app {
  margin: 20px;
}
</style>
