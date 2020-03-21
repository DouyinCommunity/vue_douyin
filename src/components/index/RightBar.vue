<template>
  <div class="right-bar">
    <div class="item">
      <div class="avatar-border">
        <img class="avatar" src="@/assets/images/avatar.jpg" alt="">
        <span class="follow">+</span>
      </div>
    </div>
    <div class="item">
      <div class="like-icon">❤</div>
      <span class="like-count">19.7w</span>
    </div>
    <div class="item">
      <div class="comment-icon">💬</div>
      <span class="comment-count">2.7w</span>
    </div>
    <div class="item">
      <div class="forward-icon">💭</div>
      <span class="forward-count">196</span>
    </div>
    <div class="item">
      <div class="music-border">
        <img src="@/assets/images/avatar.jpg" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightBar'
}
</script>

<style scoped>
.right-bar{
  position: absolute;
  right: 0;
  top: 19rem;
  width: 55px;
}
.right-bar .item .avatar-border{
  position: relative;
  width: 50px;
  height: 50px;
  border: 2px solid #fff;
  border-radius: 50%;
}
  .right-bar .item .avatar {
    width: 50px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  .right-bar .item .avatar-border .follow{
    display: block;
    width: 25px;
    height: 25px;
    line-height: 25px;
    text-align: center;
    font-size: 24px;
    color: #fff;
    background-color: red;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    font-weight: bold;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, 50%);
  }

  .right-bar .item{
    text-align: center;
    padding: 10px 0;
  }
  .right-bar .item .like-icon,
  .right-bar .item .comment-icon,
  .right-bar .item .forward-icon{
    color: #fff;
    font-size: 28px;
  }

  .right-bar .item .like-count,
  .right-bar .item .comment-count,
  .right-bar .item .forward-count{
    color: #fff;
  }

  .right-bar .item .music-border{
    width: 60px;
    height: 60px;
    background-color: #000;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: round 6s 0s linear infinite;
  }
  .right-bar .item .music-border img{
    width: 40px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
  }
  @keyframes round {
    from{
      -webkit-transform: rotate(0deg);
      -moz-transform: rotate(0deg);
      -ms-transform: rotate(0deg);
      -o-transform: rotate(0deg);
      transform: rotate(0deg);
    }
    to{
      -webkit-transform: rotate(360deg);
      -moz-transform: rotate(360deg);
      -ms-transform: rotate(360deg);
      -o-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
</style>
