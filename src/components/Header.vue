<template>
  <div class="header-wrapper">
    <div class="site-left">
      <img src="~@/assets/logo.png" class="logo">
      <span class="site-name">XD云课堂 </span>
    </div>
    <span :class="choosed" class="main-title">首页</span>
    <span class="personal">
      <el-dropdown @command="handleCommand">
        <span class="el-dropdown-link">
          用户名...<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item command="/personal">个人空间</el-dropdown-item>
          <el-dropdown-item command="/login">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </span>
  </div>
</template>

<script>

/* eslint-disable */
export default {
  name: 'Header',
  data() {
    return {
      lessons: [],
      choosed: '',
    };
  },
  methods: {
    handleClick() {
      this.lessons.push('1');
    },
    handleCommand(command) {
      this.$router.push(command);
    }
  },
  mounted() {
    if (this.$route.path === '/main') {
      console.log('it is main');
      this.choosed = 'main-title-choosed';
    }
    else this.choosed = '';
  }
};
</script>

<style lang="scss" scoped>
@import '@/theme/variable.scss';

.header-wrapper {
  height: 56px;
  // background-color: $--border-color-lighter;
  border-bottom: 1px solid rgba($color: $--color-info, $alpha: 0.2);
  line-height: 56px;
  text-align: center;
  color: $--color-word;
}
.site-left {
  float: left;
  margin-left: 10px;
  // font-size: 16px!important;
}
.site-name {
  text-shadow: 2px -1px 1px rgb(168, 166, 166);
  font-weight: bold;
  font-size: 16px;
  color: rgb(63, 62, 62);
}
.logo {
  height: 30px;
  width: 31px;
  padding: 4px;
  // border: 0.5px solid;
  border-radius: 50%;
  background-color: $--color-logo;
  margin-right: 5px;
}
.personal {
  float: right;
  margin-right: 40px;
  // font-size: ;
}
.main-title {
  font-weight: bold;
  font-size: 16px;
  cursor: pointer;
}
.main-title-choosed {
  font-weight: bold;
  color: #3072f6;
}
.main-title-choosed:after {
  display: inline-block;
  width: 35px;
  height: 2px;
  color: #3072f6;
}
</style>
