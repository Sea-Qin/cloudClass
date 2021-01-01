<template>
  <div>
    <div class="video-part">
      <p class="video-msg">1-2 计算机安全导论课程第二节</p>
      <div class="video-wrapper">
        <video-menu :videoSrc="videoSrc"></video-menu>
      </div>
    </div>
    <div class="lesson-msg-part">
      <el-tabs type="card">
      <el-tab-pane label="课程章节">
        <ul>
          <li
            class="video-item"
            v-for="(item, index) of videoList"
            :key="item.id"
          >
            <el-link :href="`/videoPlay:${item.id}`">第{{index+1}}课</el-link>
          </li>
        </ul>
      </el-tab-pane>
      <el-tab-pane label="评论">
        这里是课程评论
      </el-tab-pane>
    </el-tabs>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import Video from '@/components/Video';
import classPlay from 'C:/Users/覃海冰/OneDrive/桌面/cloudClass/mock/staticFile/classPlay.json';

export default {
  name: 'videoPlay',
  components: {
    VideoMenu: Video
  },
  data() {
    return {
      videoSrc: 'https://vd3.bdstatic.com/mda-ikmd5ysm9urur3xw/sc/mda-ikmd5ysm9urur3xw.mp4?v_from_s=tc_videoui_4135&auth_key=1609528187-0-0-0f4b85d807e117e6e1265d1fa749f3ca&bcevod_channel=searchbox_feed&pd=1&pt=3&abtest=8010_1',
      videoList: classPlay.data.videos
    };
  },
  mounted() {
    console.log(classPlay.data);
    console.log(this.videoList)
  }
};
</script>

<style lang="scss" scoped>
.video-part {
  width: 1000px;
  margin: 30px auto;
  margin-top: -40px;
  // margin-top: 0;
  .video-msg {
    color: #000;
    font-size: 16px;
    font-weight: bold;
    line-height: 50px;
  }
  .video-wrapper {
    width: 800px;
    padding: 20px 100px;
    background-color: #000;
  }
}
.lesson-msg-part {
  width: 1000px;
  margin: 20px auto;
  .video-item {
    line-height: 35px;
    background: #e8f3fe;
    margin-top: 5px;
    text-align: center;
  }
}
</style>
