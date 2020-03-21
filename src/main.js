import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VideoPlayer from 'vue-video-player'

// import style
import 'swiper/css/swiper.css'
import 'video.js/dist/video-js.css'
import 'vue-video-player/src/custom-theme.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)
Vue.use(VideoPlayer)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
