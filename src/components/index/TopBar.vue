<template>
    <div class="top-bar">
      <div class="left">
        <span>live</span>
      </div>
      <div class="middle">
        <div class="item" :class="topIndex === 0 ? 'active':''" @click="topIndex = 0">
          <span>同城</span>
        </div>
        <div class="item" :class="topIndex === 1 ? 'active':''" @click="topIndex = 1">
          <span>关注</span>
        </div>
        <div class="item" :class="topIndex === 2 ? 'active':''" @click="topIndex = 2">
          <span>推荐</span>
        </div>
      </div>
      <div class="right">
        <span>🔍</span>
      </div>
    </div>
</template>

<script>
export default {
  name: 'TopBar',
  data() {
    return {
      topIndex: 0
    }
  }
}
</script>

<style scoped>
  .top-bar{
    background-color: transparent;
    width: 100%;
    height: 50px;
    position: fixed;
    top: 0;
    left: 0;
    font-size: 18px;
    color: #ccc;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px 20px;
    display: flex;
    z-index: 1000;
  }
  .top-bar .left{
    width: 20%;
    text-align: left;
  }

  .top-bar .middle{
    width: 60%;
    display: flex;
    justify-items: center;
  }
  .top-bar .middle .item{
    flex: 1;
    text-align: center;
  }
  .top-bar .middle .active span{
    color: #fff;
    border-bottom: 2px solid #fff;
    padding-bottom: 5px;
  }
  .top-bar .right{
    width: 20%;
    text-align: right;
  }
</style>
