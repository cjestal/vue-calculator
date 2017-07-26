<template>
  <div class="equation">
      {{equation}}
  </div>
</template>

<script>
  export default {
    computed: {
      equation() {
        return this.$store.getters.getEquation;
      },
    },
  };
</script>

<style>
  .equation {
    height: 50px;
    font-size: 25px;
  }
</style>
