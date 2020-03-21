<template>
  <div class="video-list">
    <swiper ref="mySwiper" :options="swiperOptions">
      <swiper-slide v-for="(item, index) in videoList" :key="index">
        <videos ref="videos" :video_url = "item.url" :index = "index"/>
        <video-info/>
        <right-bar/>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Videos from './Videos'
import VideoInfo from './VideoInfo'
import RightBar from './RightBar'
export default {
  name: 'VideoList',
  data() {
    return {
      index: 0,
      swiperOptions: {
        direction: 'vertical',
        grabCursor: true,
        setWrapperSize: true,
        autoHeight: true,
        slidesPerView: 1,
        mousewheel: true,
        mousewhellControl: true,
        height: window.innerHeight,
        resistanceRatio: 0,
        observeParents: true,
        on: {
          tap: () => {
            this.playAction(this.index)
          },
          slideNextTransitionStart: () => {
            this.index += 1
            this.nextVideo(this.index)
          },
          slidePrevTransitionEnd: () => {
            if (this.index > 0) {
              this.index -= 1
              this.preVideo(this.index)
            }
          }
        }
      },
      videoList: [
        {
          id: '1',
          url: 'https://apd-b0e2e60de0e3b19b61ef9876dd7f08d6.v.smtcdns.com/yoo.tc.qq.com/AQTy9MyTxcU0owSoG7ilkguBDxiWiYuJ1LhrOMipUZvs/uwMROfz2r5xoIaQXGdGnC2dfDma955wQcrIcBO3otHFhKtWp/t30058ri097.mp4?sdtfrom=v1010&guid=96e0038a973ae43548db276aa5a527ad&vkey=4263FB9482432170EF20E6C9E747D348CE8F82F73274F5DF376A8D2F9316CEE61959C85D10A6EC2BA66C0833A286903587A621BAAB4E97B02477AA01DB06AC8C996DE5D1084D4F4C965D0C89E82415DE4CF2256160159B89FC0C62EE7B2BCED3E6DB27D5BD5BB1871BD964F3439D889D974E12523D1E6138589B399DAC54A7FD'
        },
        {
          id: '2',
          url: 'https://ugcydzd.qq.com/uwMROfz2r55oIaQXGdGnC2deB3debz08TL8O1QkYnkY3rKi0/szg_83492148_50001_a1efe450e4db44eba529b0ae92dae1d8.f10.mp4?sdtfrom=v1010&guid=96e0038a973ae43548db276aa5a527ad&vkey=A26A77278E25B355749D08283782091C51F66478355313916D55E45B710403B1C08184301E65C4FA381E3971610C2CC6413DF1FF7FC408BE28A3EF8608916A1F00005A15D82380ACEF5F872A4E7FBD55A35DC5F5BD9090725D11FB25500B937E61D7E8E72B0DC159CB481060C68ECE8FFDBFE7B6DF897EAC62885CA2A9F6853B'
        },
        {
          id: '3',
          url: 'https://ugccsy.qq.com/uwMROfz2r55oIaQXGdGnC2deB3debz08TL8O1QkYnkY3rKi0/szg_33885626_50001_f4079c7888f7446f8109d0dcbd0b6c01.f10.mp4?sdtfrom=v1010&guid=96e0038a973ae43548db276aa5a527ad&vkey=455A43FEE4CCD5C267BFE69698FA5A21EBE6C54C866A7FF5A76D54C0824A9A271944F4E6AD0AC0ABCEA6DA9BE63258EA98B66C14D7EA4743756C380B09B7054CD50480D54E07BD2E2587894A874A20B859A5D48DADC95F059E15C8A3A4DEB4AF734FD0FC5C0516A8EFFCB0B89CA51D909C1B2ACFD3AB87297A5E6110900A7BEF'
        },
        {
          id: '4',
          url: 'https://ugccsy.qq.com/uwMROfz2r55oIaQXGdGnC2deB3debz08TL8O1QkYnkY3rKi0/szg_68288965_50001_29569c9e217b4ec3af7e248ec410c3ef.f10.mp4?sdtfrom=v1010&guid=96e0038a973ae43548db276aa5a527ad&vkey=78DF0F68B3EFBB356697D474A773AF172FBE6F72CFFA6C0A5D050722424CB4D21F8F9045298E2C59DACB5E983F5B52DAA4F755BB0B667736BEB68D23F7A9F8E8CC630C005B4E761606F9A417FD20B0209D3F0DD60F1F2C5DE5832DCCEF6E0CD3F09B5A962BDC8583E770E9F62FE085D5720935463C8162C4F11D38B640D85752#t=3'
        }
      ]
    }
  },
  methods: {
    playAction() {
      this.$refs.videos[this.index].playOrStop()
    },

    // 下一个视频
    nextVideo() {
      this.$refs.videos[this.index - 1].stop()
      this.$refs.videos[this.index].play()
    },

    // 上一个视频
    preVideo() {
      this.$refs.videos[this.index + 1].stop()
      this.$refs.videos[this.index].play()
    }
  },
  components: {
    RightBar,
    Swiper,
    SwiperSlide,
    Videos,
    VideoInfo
  }
}
</script>

<style scoped>
.video-list .swiper-container{
  height: 100%;
  position: relative;
}
</style>
