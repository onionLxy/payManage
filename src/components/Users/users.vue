 <template>
  <!-- 面包屑导航 -->
  <div>
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    </el-breadcrumb>
      <el-table :data="usersList" style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="380"> </el-table-column>
      <el-table-column prop="mobile" label="电话"> </el-table-column>
      <el-table-column label="用户状态">
        <!-- 滑块 -->
        <template slot-scope="scope">
          <el-switch
            v-model= "scope.row.mg_state"
            active-color="#ccc"
            inactive-color="skyblue"
            @change= "changeState(scope.row)">
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作"></el-table-column>
      <!-- <el-table-column prop="address" label="用户状态"> </el-table-column>
        <el-table-column prop="address" label="操作">  </el-table-column> -->
    </el-table>
  </div>
</template>
<script>
/* eslint-disable */
export default {

  data() {
    return {
      usersList: [
        {
          username: "2016-05-02",
          email: "王小虎",
          adteldress: "上海市普陀区金沙江路 1518 弄"
        },

      ]
    };
  }
};
</script>
<style lang="less" scoped>
.el-breadcrumb {
  height: 40px;
}
.el-table__header-wrapper {
  height: 40px;
}
</style>
