<template>
  <div class="tab-bar">
    <div class="item" :class="tabIndex === 0 ? 'active' : ''" @click="changeTab(0)">
      <router-link to="/index"><span>首页</span></router-link>
    </div>
    <div class="item" :class="tabIndex === 1 ? 'active' : ''" @click="changeTab(1)">
      <router-link to="/follow"><span>熟人</span></router-link>
    </div>
    <div class="item" :class="tabIndex === 2 ? 'active' : ''" @click="changeTab(2)">
      <router-link to="/produce"><span>
        <button class="produce-btn">+</button>
      </span>
      </router-link>
    </div>
    <div class="item" :class="tabIndex === 3 ? 'active' : ''" @click="changeTab(3)">
      <router-link to="/message"><span>消息</span></router-link>
    </div>
    <div class="item" :class="tabIndex === 4 ? 'active' : ''" @click="changeTab(4)">
      <router-link to="/user"><span>我</span></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabBarVue',
  data() {
    return {
      tabIndex: 0
    }
  },
  methods: {
    changeTab(index) {
      this.tabIndex = index
    }
  }
}
</script>

<style scoped>
  .tab-bar{
    width: 100%;
    height: 50px;
    line-height: 50px;
    background-color: transparent;
    position: fixed;
    left: 0;
    bottom: 0;
    font-size: 16px;
    color: #ccc;
    display: flex;
    justify-items: center;
    z-index: 1000;
  }
  .tab-bar .item{
    flex: 1;
    text-align: center;
  }
  .tab-bar .item span[class="produce-btn"]{
    width: 100%;
    height: 100%;
    display: inline-block;
  }
  .tab-bar .item a{
    color: #eee;
    text-decoration: none;
  }
  .tab-bar .active{
    color: #fff;
    font-weight: bold;
  }
  .tab-bar > .active a span{
    border-bottom: 2px solid #fff;
    padding-bottom: 5px;
  }
  .tab-bar .produce-btn{
    width: 50%;
    height: 50%;
    background-color: #fff;
    font-size: 22px;
    color: #000;
    border: none;
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    padding-bottom: 20px!important;
  }
</style>
