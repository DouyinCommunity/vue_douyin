<template>
    <div class="index">
      <top-bar/>
      <video-list/>
    </div>
</template>

<script>
import TopBar from '@/components/index/TopBar'
import VideoList from '@/components/index/VideoList'
export default {
  name: 'Index',
  components: {
    VideoList,
    TopBar
  }
}
</script>

<style scoped>

</style>
