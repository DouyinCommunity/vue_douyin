<template>
  <div class="video-info">
    <div class="nickname">@朵儿同学</div>
    <div class="desc">这个视频很好看的哦</div>
    <div class="music">
      <span>🎵</span>
      <div>
        <span class="music-info">多尔同学原生音乐</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoInfo'
}
</script>

<style scoped>
  .video-info{
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 55px;
    padding: 0 10px;
    overflow: hidden;
  }
  .video-info > div{
    color: #fff;
    margin: 5px 0;
    letter-spacing: 1px;
  }
  .video-info .nickname{
    font-weight: 700;
  }
  .video-info .music{
    height: 35px;
    display: flex;
    justify-items: center;
    line-height: 35px;
  }
  .video-info .music div{
    width: 70%;
    line-height: 35px;
    display: inline-block;
    overflow: hidden;
    margin-left: 5px;
  }
  .video-info .music .music-info{
    display: inline-block;
    white-space: nowrap;
    animation: 5s musicInfoLoop linear infinite normal;
  }
  @keyframes musicInfoLoop {
    from{
      transform: translateX(70%);
    }
    to{
      transform: translateX(-100%);
    }
  }
</style>
