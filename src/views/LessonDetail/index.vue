<template>
  <div class="wrapper">
    <el-card class="box-card">
      <div class="bg-img"></div>
      <div class="card-div">
        <div class="lesson-msg">
          <p class="lesson-title"> {{title}} </p>
          <!-- <div class="class-msg"> -->
          <p class="lesson-desc" :title="description">课程简介：{{description}}</p>
          <p class="lesson-teacher">
            教师<i class="el-icon-user-solid"></i>：{{teacher}}
          </p>
          <p :class="`lesson-cost-${cost?'money':'free'}`">
            {{cost?  '￥' + cost:'课程免费'}}
          </p>
          <!-- </div> -->
        </div>
        <div class="handle-lesson">
          <el-popconfirm
            :title="`确认要${buttonValue}吗？`"
            @onConfirm="clickHandleLesson()"
          >
            <el-button slot="reference">
              {{buttonValue}}</el-button>
          </el-popconfirm>
        </div>
      </div>
    </el-card>
    <p class="class-tabs">
      <i class="el-icon-caret-right"></i> 课程章节
    </p>
    <el-card class="lesson-area">
      <!-- <p class="intro-title">{{showTitle}}</p> -->
      <ul
        class="url-wrapper"
        v-if="havePaid"
        v-infinite-scroll="load"
        style="overflow:auto"
      >
        <li
          v-for="(item, index) of videos"
          :key="item.id"
          class="infinite-list-item"
        >
          <el-link :href="`/videoPlay:${item.id}`">第{{index+1}}课</el-link>
        </li>
      </ul>
      <div v-else>请先购买课程！</div>
    </el-card>
  </div>
</template>

<script>
import classPlay from 'C:/Users/覃海冰/OneDrive/桌面/cloudClass/mock/staticFile/classPlay.json';

export default {
  /* eslint-disable */
  name: 'lesson',
  data() {
    return {
      lessonHandle: '',
      id: null,
      free: false,
      cost: null,
      description: '',
      teacher: '',
      title: '',
      buttonValue: '购买课程',
      havePaid: false,
      videos: classPlay.data.videos,
      //滚动
      count: 0
    };
  },
  methods: {
    clickHandleLesson() {
      console.log(this.buttonValue);
      if(this.buttonValue == '添加课程') {
        //`````
        console.log('成功添加课程！');
        this.buttonValue = '课程已添加';
        //``` 对按钮进行不可点击处理
      } else if (this.buttonValue == '购买课程') {
        //``````````
        console.log('成功购买课程！');
        this.havePaid = true;
        this.buttonValue = '课程已购买';
        //``` 对按钮进行不可点击处理
      } else {
        console.log('no match')
      }
    },
    load () {
      this.count += 2
    }
  },
  mounted() {
    this.free = true;
    this.cost = 129;
    this.description = `有关计算机安全有关计算机有关计算机安全安全有关计算机安
    全有关计算机安全有关计算机安全有关计算机安全。。。。全有关计算机安全有关计算
    机安全有关计算机安全。。。。全有关计算机安全有关计算机安全有关计算机安全。。
    。。全有关计算机安全有关计算机安全有关计算机安全。。。。全有关计算机安全有关
    计算机安全有关计算机安全。。。。全有关计算机安全有关计算机安全有关计算机安全
    。。。。全有关计算机安全有关计算机安全有关计算机安全。。。。全有关计算机安全
    有关计算机安全有关计算机安全。。。。全有关计算机安全有关计算机安全有关计算机
    安全。。。。全有关计算机安全有关计算机安全有关计算机安全。。。。全有关计算机
    安全有关计算机安全有关计算机安全。。。。全有关计算机安全有关计算机安全有关计
    算机安全。。。。`;
    this.teacher = '王一';
    this.title = '计算机安全导论';
  }
};
</script>

<style lang="scss" scoped>
@import '@/theme/variable.scss';
.wrapper {
  width: 1000px;
  margin: 0 auto;
  margin-bottom: 30px;
  .box-card {
    position: relative;
  }
  .bg-img {
    // 设置卡片图片背景模糊
    background: $--color-logo url(../../assets/logo.png) no-repeat;
    background-position: 96% 50px;
    height: 200px;
    -webkit-filter: blur(10px);
    -moz-filter: blur(10px);
    -o-filter: blur(10px);
    -ms-filter: blur(10px);
    filter: blur(10px);
  }
  .card-div {
    top: 20px;
    margin-left: 10px;
    position: absolute;
    display: flex;
    border-radius: 4px;
    height: 200px;
    }
  .handle-lesson {
    width: 270px;
    text-align: center;
  }
  .lesson-msg {
    flex: 1;
    font-size: 12px;
    .lesson-desc {
      color: #1c1f21;
      height: 72px;
      // background: red;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 4;
      font-size: 14px;
      margin-top: -10px;
      margin-bottom: 15px;
    }
    .lesson-teacher {
      line-height: 30px;
    }
    .lesson-cost-money {
      font-weight: bold;
      color: #F01414;
    }
  }
}
.lesson-title {
  font-size: 16px;
  font-weight: bold;
  line-height: 40px;
  margin-bottom: 20px;
  // padding-bottom: 2px;
  text-shadow: 6px 4px 10px rgba(70, 69, 69, 0.4);
}
.class-tabs {
  font-size: 16px;
  margin: 40px 0 20px 0;
}

.lesson-area {
  max-height: 300px;
  padding-bottom: 20px;

}
.url-wrapper {
  max-height: 300px;
  padding-bottom: 20px;
  // padding: 20px 0;
  // background: $--border-color-lighter;
  // border-radius: 5px;
  // border: 1px solid $--border-color-lighter;
}
.add-btn {
  // font-size: 0.08rem;
  // padding: 5px 10px;
  // border: none;
  padding: 15px 50px;
  margin-top: 80px;
}
.url-wrapper li {
  line-height: 35px;
  background: #e8f3fe;
  margin-top: 5px;
  text-align: center;
  // border-radius: 25px;
  // box-shadow: 10px 2px 5px #585858;
}
</style>
