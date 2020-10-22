<template>
  <div class="main-wrapper">
    <div class="search-area">
      <span>搜索相关课程：</span>
      <input type="text" name="lessonName">
    </div>
    <div class="lesson-area">
      <p class="intro-title">推荐课程</p>
      <ul class="lesson-wrapper">
        <li class="lessons">课程1</li>
        <li class="lessons">课程2</li>
        <li class="lessons">课程3</li>
        <li class="lessons">课程4</li>
        <li class="lessons">课程5</li>
        <li class="lessons">课程6</li>
        <li class="lessons">课程7</li>
        <li class="lessons">课程8</li>
      </ul>
    </div>
    <!-- <div class="search">
      <el-button type="primary" icon="el-icon-search">搜索</el-button>
      <el-input v-model="input" placeholder="请输入内容"></el-input>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'mainPage',
  data() {
    return {
      input: ''
    };
  }
};
</script>

<style lang="scss" scoped>
@import '@/theme/variable.scss';

.main-wrapper {
  margin: 20px 40px;
  // background-color: $--color-bgc;
}
.search-area {
  // font-size: 14px;
  text-align: center;
  background-color: $--border-color-lighter;
  padding: 20px 0;
}
.intro-title {
  width: 50px;
  background-color: #fff;
  border: 1px solid #fff;
  border-radius: 4px;
  margin-left: 20px;
  padding-left: 10px;
}

//课程样式
.lesson-area {
  background-color: $--border-color-lighter;
  margin-top: 25px;
  text-align: left;
  padding-bottom: 10px;
  padding-top: 5px;
  // padding-left: 10px;
}
.lesson-wrapper {
  // display: flex;
  text-align: justify;
  background-color: goldenrod;
  margin: 20px;
  margin-top: 10px;
  padding-bottom: 15px;
  // margin-left: 0;
}
.lessons {
  display: inline-block;
  width: 150px;
  height: 120px;
  margin-left: 15px;
  margin-top: 15px;
  background-color: rgb(238, 203, 4);
}

</style>
