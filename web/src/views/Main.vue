<!--  -->
<template>
  <div>
    <div class="topbar bg-black py-2 text-white px-4 d-flex ai-center">
      <img src="../assets/images/logo.png" alt="王者荣耀" height="30" />
      <div class="pl-3 flex-1">
        <div class="text-white">王者荣耀</div>
        <div class="text-grey-1 fs-xxs">团队成就更多</div>
      </div>
      <button type="button" class="btn bg-primary">立即下载</button>
    </div>
    <div class="bg-primary pt-3 pb-2">
      <div class="nav nav-inverse pb-1 jc-around">
        <div class="nav-item active">
          <router-link class="nav-link" tag="div" to="/">首页</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">攻略中心</router-link>
        </div>
        <div class="nav-item">
          <router-link class="nav-link" tag="div" to="/">赛事中心</router-link>
        </div>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
// eslint-disable-line no-unused-vars
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  methods: {}
};
</script>
<style scoped lang='scss'>
.topbar {
  position: sticky;
  top: 0;
  z-index: 999;
}
/* @import url(); 引入css类 */
</style>
