<!--  -->
<template>
  <div class="login-container">
    <el-card header="请先登陆" class="login-card">
      <el-form @submit.native.prevent="login">
        <el-form-item label="用户名">
          <el-input v-model="model.username"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="model.password"></el-input>
        </el-form-item>
        <el-button type="primary" native-type="submit">登陆</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data() {
    return {
      model: {}
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {},
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    async login() {
      const res = await this.$http.post("login", this.model);
      localStorage.token = res.data.token;
      this.$router.push("/");
      this.$message({
        type: "success",
        message: "登陆成功"
      });
    }
  }
};
</script>
<style>
/* @import url(); 引入css类 */
.login-card {
  width: 25rem;
  margin: 6rem auto;
}
</style>
