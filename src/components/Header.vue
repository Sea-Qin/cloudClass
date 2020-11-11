<template>
  <div class="header-wrapper">
    <div class="site-left">
      <img src="~@/assets/logo.png" class="logo">
      <span class="siteName">XD云课堂 </span>
    </div>
    <span>首页 </span>
    <span class="personal">xx的个人空间</span>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data() {
    return {
      lessons: []
    };
  },
  methods: {
    handleClick() {
      this.lessons.push('1');
    }
  }
};
</script>

<style lang="scss" scoped>
@import '@/theme/variable.scss';

.header-wrapper {
  height: 30px;
  background-color: $--color-bgc;
  line-height: 30px;
  text-align: center;
  color: $--color-word;
}
.site-left {
  float: left;
  margin-left: 6px;
  font-size: 0.09rem;
  text-shadow: 0px 6px 1px #83ACDB;
}
.logo {
  height: 15px;
  width: 16px;
  padding: 4px;
  border: 0.5px solid;
  border-radius: 50%;
  background-color: $--color-logo;
  margin-right: 2px;
  // float: left;
  // vertical-align: center;
}
.personal {
  float: right;
  margin-right: 6px;
}
</style>
