<template>
  <div>
    <div class="ui grid">
      <Key value="1"></Key>
      <Key value="2"></Key>
      <Key value="3"></Key>
      <Key value="+"></Key>
      <Key value="="></Key>
    </div>
    <div class="ui grid">
      <Key value="4"></Key>
      <Key value="5"></Key>
      <Key value="6"></Key>
      <Key value="-"></Key>
    </div>
    
    <div class="ui grid">
      <Key value="7"></Key>
      <Key value="8"></Key>
      <Key value="9"></Key>
      <Key value="*"></Key>
    </div>
    <div class="ui grid">
      <Key value="."></Key>
      <Key value="0"></Key>
      <Key value="C"></Key>
      <Key value="/"></Key>
    </div>
  </div>
</template>

<script>
  import Key from './Key';

  export default {
    components: {
      Key,
    },
  };
</script>

<style>

</style>
