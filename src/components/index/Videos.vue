<template>
    <div class="videos">
      <video-player
        class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
      />
    </div>
</template>

<script>
export default {
  name: 'Videos',
  data() {
    return {
      playerOptions: {
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        fluid: true,
        sources: [
          {
            type: 'video/mp4',
            src: this.video_url
          }
        ],
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        controlBar: false
      },
      playing: true
    }
  },
  methods: {
    playOrStop() {
      if (this.playing) {
        this.$refs.videoPlayer.player.pause()
        this.playing = false
      } else {
        this.$refs.videoPlayer.player.play()
        this.playing = true
      }
    },

    // 第一个视频自动播放
    autoPlayFirstVideo() {
      if (this.index === 0) {
        this.playerOptions.autoplay = true
      }
    },

    play() {
      this.$refs.videoPlayer.player.load()
      this.$refs.videoPlayer.player.play()
      this.playing = true
    },
    stop() {
      this.$refs.videoPlayer.player.pause()
      this.playing = false
    }
  },
  props: ['video_url', 'index'],
  mounted() {
    this.autoPlayFirstVideo()
  }
}
</script>

<style>
  .videos{
    width: 100%;
    height: 100%;
    position: relative;
  }
  .videos .video-player,
  .videos .video-player .video-js{
    height: 100%;
  }
  .videos .vjs-custom-skin .video-js .vjs-big-play-button{
    border: none;
    width: 40px;
    height: 40px !important;
    border-radius: 50%;
    line-height: 40px !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(100%, 50%);
  }
</style>
