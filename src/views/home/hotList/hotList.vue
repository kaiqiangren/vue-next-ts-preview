<template>
  <div class="hot-list-container">
    <button @click="getMediaStream">获取流视频</button>
    <button @click="closeMedia">关闭视频流</button>

    <video controls class="view-container" ref="localVideo" autoplay playsinline></video>
    <button @click="getDisplay">抓取桌面</button>
    <video controls class="view-container" ref="remoteVideo" autoplay playsinline></video>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'hotList',
  setup () {
    const localVideo = ref(null)
    const remoteVideo = ref(null)

    const constraints = {
      video: {
        width: 375,
        height: 300
      },
      audio:true,
    }

    const getMediaStream = () => {
      // 抓取本地视频流
      window.navigator.mediaDevices.getUserMedia(constraints).then((stream) => {
        localVideo.value.srcObject = stream;
      })
    }
    // 关闭摄像头
    const closeMedia = () => {
      constraints.video = false
      constraints.audio = false
      localVideo.value.srcObject = null
    }
    // 抓取桌面信息
    const getDisplay = () => {
      window.navigator.mediaDevices.getDisplayMedia({
        video: true, // 是否抓取视频
        audio:true //是否抓取音频
      }).then(stream => {
        remoteVideo.value.srcObject = stream;
      })
    }


    onMounted(() => {
      // getMediaStream()
    })
    return {
      localVideo,
      remoteVideo,
      getMediaStream,
      getDisplay,
      closeMedia
    }
  }
}
</script>

<style lang="scss">
  .hot-list-container{
    video {
      border: 1px solid blue;
    }
    .view-container{
      width: 100%;
      height: 300px;
    }
  }
</style>
