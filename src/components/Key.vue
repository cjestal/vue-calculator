<template>
  <div class="key" @click="pressKey(value)">
    {{value}}
  </div>
</template>

<script>
  export default {
    props: ['value'],
    methods: {
      pressKey(input) {
        if (input === 'C') {
          this.$store.commit('clear');
        } else if (input === '=') {
          this.$store.commit('compute');
        } else if (['+', '-', '*', '/'].includes(input)) {
          this.$store.commit('setEquation', input);
        } else {
          this.$store.commit('setOutput', input);
        }
      },
      equal() {},
    },
  };
</script>

<style>
  .key {
    font-size: 60px;
    border: 5px solid black;
    margin: 10px;
    border-radius: 15px;
    padding: 20px;
    width: 100px;
    height: 100px;
  };
</style>
