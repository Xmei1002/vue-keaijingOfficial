<template>
  <div class="title">
    <slot name="zh"></slot>
    <slot name="en"></slot>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>

  .title {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .title :nth-child(1) {
    font-weight: 900;
    font-size: 2.8rem;
  }

  .title :nth-child(2) {
    position: absolute;
    top: 2.2rem;
    font-size: 1.6rem;
    font-family: sans-serif;
    color: rgb(211, 209, 209);
  }

</style>