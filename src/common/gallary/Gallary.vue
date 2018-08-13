<template>
  <div class="container" @click="handleGallaryClick ">
    <div class="wrapper">
      <swiper :options="swiperOptions">
        <!-- slides -->
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"
               class="gallary-img">
        </swiper-slide>
        <swiper-slide>
          <img src="http://img1.qunarzz.com/sight/p0/1607/7c/7cda8b6782dabd80b4.img.jpg_600x330_8572a930.jpg"
               class="gallary-img">
        </swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallary',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observeParents: true,
        observer: true
      }
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" scoped>
.container >>> .swiper-container
  overflow: inherit

.container
  display: flex
  flex-direction: column
  justify-content: center
  z-index: 99
  left: 0
  right: 0
  bottom: 0
  top: 0
  background: #000
  position: fixed
  .wrapper
    height: 0
    width: 100%
    padding-bottom: 100%
    .swiper-pagination
      color: #fff
      bottom: -1rem
    .gallary-img
      width: 100%
</style>
