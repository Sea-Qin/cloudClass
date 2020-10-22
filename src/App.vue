<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
};
</script>

<style lang="scss" scoped>
@import 'variable';
.tips {
  // font-size: $--font-size-base;
  color: $--color-primary-light-1;
}
// #app {
//   background-color: bisque;
// }
</style>
