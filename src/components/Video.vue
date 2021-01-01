<template>
  <div class="video">
    <video ref="my_video"
      @canplay="getTotal()"
      @timeupdate="updateTime()"
    >
      <source :src="videoSrc"/>
    </video>
    <div class="controls">
      <div class="con_left">
        <!-- 播放与暂停· -->
        <span
          :class="`icon-play3 icon-play-${playState}`"
          :title="playState? '暂停': '播放'"
          @click="togglePlay()">
        </span>
        <!-- 停止 -->
        <span
          class="icon-stop"
          title="结束播放"
          @click="stopPlay()"></span>
        <!-- 播放时间/总时长 -->
        <span title="进入全屏可拖动进度条">
          {{currentTime}}/{{totalTime}}
        </span>
      </div>
      <div class="con_right">
        <!-- 声音 -->
        <span class="icon-volume-low" @click="toggleMuted()" title="静音/开启声音">
          <i class="el-icon-mic"></i>
          <span :class="`muted-${muted}`">——</span>
        </span>
        <!-- 全屏 -->
        <span class="icon-loop" @click="toggleFullScreen()" title="全屏">
          <i class="el-icon-full-screen"></i>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 

export default {
  name: 'Video',
  props: ['videoSrc'],
  data() {
    return {
      videoDom: null,
      playState: 0, //记录播放状态，0表示不播放，1表示正在播放
      totalTime: null,
      currentTime: '00:00',
      muted: false
    };
  },
  mounted() {
    this.videoDom = this.$refs.my_video;
  },
  methods: {
    togglePlay() {
      if (this.playState === 0) {
        this.videoDom.play();
        console.log('play');
      }
      else {
        this.videoDom.pause();
        console.log('pause');
      }
      this.playState = this.playState === 0 ? 1 : 0;
      console.log(this.playState);
    },
    stopPlay() {
      this.playState = 0;
      this.videoDom.currentTime = 0;
      this.videoDom.pause();
    },
    // 时间格式化处理
    timeFormat(time) {
      let minute = Math.floor((time % 3600) / 60);
      let second = Math.floor(time % 60);
      minute = minute < 10 ? "0" + minute: minute;
      second = second < 10 ? "0" + second : second;
      return `${minute}:${second}`;
    },
    getTotal() {
      this.totalTime = this.timeFormat(this.videoDom.duration);
    },
    updateTime() {// 获取当前视频时间
      this.currentTime = this.timeFormat(this.videoDom.currentTime);
      if(this.currentTime === this.totalTime) this.playState = 0;
    },
    toggleMuted() {// 设置静音切换
      this.videoDom.muted = !this.videoDom.muted;
      this.muted = !this.muted;
      // console.log(this.muted);
    },
    toggleFullScreen(event) {
      let isFullScreen = document.webkitIsFullScreen || document.fullscreen;
      if (!isFullScreen) {
        const inFun = this.videoDom.requestFullScreen || this.videoDom.webkitRequestFullScreen;
        inFun.call(this.videoDom);
      } else {
        const exitFun = document.exitFullscreen || document.webkitExitFullscreen;
        exitFun.call(document);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.video {
  position: relative;
  video {
    width: 100%;
    height: 100%;
  }
  .controls {
    width: 100%;
    height: 40px;
    position: absolute;
    bottom: 0;
    left: 0;
    background: rgba($color: #000000, $alpha: 0);
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      // padding: 0 5px;
      color: #fff;
      cursor: pointer;
    }
    .icon-play3 {
      display: inline-block;
      margin-left: 12px;
    }
    .icon-play-0 {
      // 未播放,三角形
      width: 0;
      height: 0;
      border: 6px solid transparent;
      transform: scaleX(1.6);
      border-left-color: #fff;
    }
    .icon-play-1 {
      // 播放中，两条竖杠
      width: 5px;
      height: 12px;
      margin-left: 8px;
      margin-right: 3px;
      background: rgba($color: #000000, $alpha: 0);
      border: 4px solid;
      border-left-color: #fff;
      border-right-color: #fff;
      border-top: none;
      border-bottom: none;
      // border-radius: 4px;
    }
    .icon-stop {
      display: inline-block;
      width: 12px;
      height: 12px;
      background-color: #fff;
      margin: 0 14px;
      margin-right: 20px;
    }
    .el-icon-full-screen {
      margin: 0 20px;
    }
    .muted-false {
      display: none;
    }
    .muted-true {
      // display: block;
      position: absolute;
      width: 19px;
      overflow: hidden;
      // width: 10px;
      // height: 1px;
      color: #fff;
      transform: rotate(45deg);
      // padding: 0 2px;
      margin-top: -3px;
      margin-left: -16px;
      // top: ;
      // margin-top: -25px;
    }
  }
}
</style>
