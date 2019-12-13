<!--  -->
<template>
  <div class="login-container">
    <el-card header="请先登陆" class="login-card">
      <el-form>
        <el-form-item label="用户名">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input></el-input>
        </el-form-item>
        <el-button type="primary">登陆</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {}
};
</script>
<style>
/* @import url(); 引入css类 */
.login-card {
  width: 25rem;
  margin: 10rem auto;
}
</style>