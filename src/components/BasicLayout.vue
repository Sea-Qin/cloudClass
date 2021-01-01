<template>
  <div>
    <header-menu></header-menu>
    <div class="layout-body">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Header from './Header';

export default {
  name: 'BasicLayout',
  components: {
    HeaderMenu: Header
  }
};
</script>

<style lang="scss" scoped>
  .layout-body {
    max-width: 1150px;
    // background-color: aqua;
    margin: 40px auto;
  }
</style>
