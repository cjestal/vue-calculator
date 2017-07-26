<template>
  <div class="output">
      {{output}}
  </div>
</template>

<script>
  export default {
    computed: {
      output() {
        return this.$store.getters.getOutput;
      },
    },
  };
</script>
<style>
  .output {
    height: 70px;
    font-size: 60px;
  }

</style>
