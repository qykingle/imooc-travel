<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      输入城市/景点/游玩主题
    </div>
    <router-link to="/city">
      <div class="header-right">
        {{this.city}}
        <span class="iconfont arrow-icon">&#xe64a;</span>
      </div>
    </router-link>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<!--scoped 保证css样式不会对其他文件产生影响-->
<style scoped lang="stylus">
@import '~styles/varibles.styl'
//1rem = html font-size = 50px
.header
  display: flex
  line-height: $headerHeight
  background: $bgColor
  color: #fff
  .header-left
    width: .64rem
    float: left
    .back-icon
      text-align: center
      font-size: .4rem
  .header-input
    flex: 1
    height: .64rem
    line-height: .64rem
    padding-left: .2rem
    margin-top: .12rem
    margin-left: .2rem
    background: #ffffff
    border-radius: .1rem
    color: #ccc
  .header-right
    color: #fff
    mini-width: 1.04rem
    padding: 0 .1rem
    float: right
    text-align: center
    .arrow-icon
      font-size: .24rem
</style>
