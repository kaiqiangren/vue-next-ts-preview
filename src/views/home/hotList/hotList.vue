<template>
  <div class="hot-list-container">
    <video class="view-container" ref="localVideo" autoplay playsinline></video>
    <video class="view-container" ref="remoteVideo" autoplay playsinline></video>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
  name: 'hotList',
  setup () {
    const localVideo = ref(null)
    const remoteVideo = ref(null)

    onMounted(() => {
      // 本地创建RTC 连接
      const localPc = new window.RTCPeerConnection(localVideo)

      // 抓取本地视频流
      window.navigator.mediaDevices.getUserMedia({
        // 是否抓取视频
        video: {
          width: 375,
          height: 300
        },
        audio:true, //是否抓取音频
      }).then((stream) => {
        localVideo.value.srcObject = stream;
        localPc.addStream(stream)
        // localPc.createOffer().then(() => {
        //
        // })
      })

    })
    return {
      localVideo,
      remoteVideo
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
