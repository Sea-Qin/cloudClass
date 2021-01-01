<template>
  <div class="main-wrapper">
    <p class="class-tabs">
      <i class="el-icon-caret-right"></i>
      <span class="tabs-title">课程搜索</span>
    </p>
    <div class="search-area-wrapper">
      <span class="search-input-span">
        <el-input
          size="large"
          placeholder="请输入课程关键字"
          prefix-icon="el-icon-search"
          maxlength="15"
          clearable
          v-model="searchMsg"
          @change="handleSearch"
        >
        </el-input>
      </span>
    </div>
    <p class="class-tabs">
     <i class="el-icon-caret-right"></i>
      <span class="tabs-title">{{showTitle}}</span>
    </p>
    <div class="lesson-area">
      <ul class="lesson-wrapper">
        <li class="lesson-item" v-for="item of classData.data" :key="item.id">
          <a :href="`/lessonDetail:${item.id}`">
            <p class="lesson-item-title">{{item.title}}</p>
            <div class="lesson-item-msg">
              <p class="lesson-intro">{{item.desc}}</p>
              <p class="lesson-teacher">
                <i class="el-icon-user-solid"></i>：{{item.teacher}}
              <p>
              <p :class="`lesson-cost-${item.cost?'money':'free'}`">
                {{item.cost? '￥' + item.cost:'课程免费'}}
              </p>
          </div>
          </a>
        </li>
        <li class="lesson-more"><a href="#">更多内容请搜索···</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
import classRecommend from 'C:/Users/覃海冰/OneDrive/桌面/cloudClass/mock/staticFile/classRecommend.json';
import classSearch from 'C:/Users/覃海冰/OneDrive/桌面/cloudClass/mock/staticFile/classSearch.json';

/* eslint-disable */
export default {
  name: 'mainPage',
  data() {
    return {
      searchMsg: '',
      showTitle: '推荐课程',
      classRecommend: classRecommend,
      classSearch: classSearch,
      classData: classRecommend
    };
  },
  methods: {
    handleSearch() {
      if(!this.searchMsg) return;
      this.$message('触发搜索！');
      this.showTitle = '搜索结果';
      this.classData= this.classSearch;
    }
  },
  mounted() {
    console.log('mounted', this.classData);
  }
};
</script>

<style lang="scss" scoped>
@import '@/theme/variable.scss';

// .main-wrapper {
//   margin: 20px 40px;
//   // background-color: $--color-bgc;
// }
.search-area-wrapper {
  text-align: center;
  box-shadow: 0px 3px 10px 5px rgba(175, 173, 173, 0.2);
  padding: 20px 0;
  border-radius: 2px;
  margin: 20px 0 40px 0;
}
.class-tabs {
  margin-left: -5px;
  font-size: 16px;
}
.tabs-title {
  box-shadow: 5px 3px 5px rgba(175, 173, 173, 0.2);
  padding: 2px;
  margin-right: 10px;
}
.search-input-span {
  display: inline-block;
  width: 270px;
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
  text-align: left;
  padding-bottom: 10px;
  border-radius: 2px;
  .lesson-wrapper {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    border-radius: 5px;
    padding-bottom: 15px;
    .lesson-item {
      box-shadow: 0px 3px 10px 5px rgba(175, 173, 173, 0.2);
      width: 260px;
      height: 195px;
      margin-top: 30px;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        transform: scale(1.05);
        transition: 0.6s;
      }
      .lesson-item-title {
        font-size: 16px;
        height: 80px;
        color: #000;
        line-height: 80px;
        background: $--color-logo url(../../assets/logo.png) no-repeat;
        background-size: 20%;
        font-weight: bold;
        text-align: center;
        border-radius: 4px 4px 0 0;
      }
    }
  }
}

.lesson-item-msg {
  padding: 10px;
  padding-bottom: 0;
  p {
    margin-bottom: 10px;
    font-size: 12px;
    color: #9199A1;
    .lesson-tips {
      float: right;
      color: #9199A1;
      font-weight: normal;
      text-decoration: underline;
    }
  }
  .lesson-intro {
    font-size: 14px;
    color: #545C63;
    height: 38px;
    //设置文字超出省略
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
  .lesson-cost-money {
    color: #F01414;
    font-weight: bold;
  }
}
.te-mon {
  font-size: 0.07rem;
  color: $--color-info;
}
.lesson-more {
  // display: block;
  width: 100%;
  margin-top: 25px;
  text-align: center;
  a {
    color: #999;
    &:hover {
      color: #2781f6;
      text-decoration: underline;
    }
  }
}
.more:hover {
  color: rgb(236, 72, 43);
  text-decoration: underline;
}
</style>
