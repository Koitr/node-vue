<!--  -->
<template>
  <div>
    <h1>广告位列表</h1>
    <el-table :data="items">
      <el-table-column prop="_id" label="ID"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column fixed="right" label="操作" width="100">
        <template slot-scope="scope">
          <el-button
            @click="$router.push(`/ads/edit/${scope.row._id}`)"
            type="text"
            size="small"
            >编辑</el-button
          >
          <el-button @click="remove(scope.row)" type="text" size="small"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: []
    };
  },
  //生命周期 - 创建完成（访问当前this实例）
  created() {
    // 获取数据
    this.fetch();
  },
  //生命周期 - 挂载完成（访问DOM元素）
  mounted() {},
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/ads");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否确定要删除分类${row.name}`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        const res = await this.$http.delete(`rest/ads/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  }
};
</script>
<style scoped>
/* @import url(); 引入css类 */
</style>
