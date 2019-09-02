 <template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 搜索 -->
    <div style="margin-top: 15px;">
      <el-input
        placeholder="请通过用户名搜索"
        v-model="searchText"
        class="input-with-select"
      >
        <el-button slot="append" icon="el-icon-search" @click="startQuery"></el-button>
      </el-input>
      <el-button>添加用户</el-button>
    </div>
    <!-- 表格 -->
    <el-table :data="usersList" style="width: 100%">
      <el-table-column prop="username" label="姓名" width="180">
      </el-table-column>
      <el-table-column prop="email" label="邮箱" width="380"> </el-table-column>
      <el-table-column prop="mobile" label="电话"> </el-table-column>
      <el-table-column label="用户状态">
        <!-- 滑块 -->
        <template slot-scope="scope">
          <el-switch
            v-model="scope.row.mg_state"
            active-color="#ccc"
            inactive-color="skyblue"
            @change="changeState(scope.row)"
          >
          </el-switch>
        </template>
      </el-table-column>
      <el-table-column label="操作"></el-table-column>
      <!-- <el-table-column prop="address" label="用户状态"> </el-table-column>
        <el-table-column prop="address" label="操作">  </el-table-column> -->
    </el-table>
    <!-- 分页 -->
    <el-pagination
      background
      layout="prev, pager, next"
      :total="total"
      :page-size="2"
      :current-page="pagenum"
      @current-change="changePage"
      class="size"
    ></el-pagination>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
export default {
  data() {
    return {
      usersList: [
        {
          username: "王小虎",
          email: "78001328",
          mobile: "15702974588"
        }
      ],
      total: 0,
      pagenum: 1,
      searchText: ""
    };
  },
  created() {
    this.loadUsersList();
  },
  methods: {
    // 发送请求，加载用户数据
    //这里发送请求需要在请求头里携带token
    loadUsersList(pagenum = 1, query = "") {
      axios
        .get("http://localhost:8888/api/private/v1/users", {
          params: {
            query,
            pagenum,
            pagesize:2
          },
          headers: {
            Authorization: localStorage.getItem("token")
          }
        })
        .then(res => {
          console.log(res);

          this.usersList = res.data.data.users;
          // 给数据的总个数赋值
          this.total = res.data.data.total;
          // 当前页
          this.pagenum = res.data.data.pagenum;
        });
    },
    // 用户滑块状态
    changeState(row) {
      const { id, mg_state: mgState } = row;
      axios.post(
        "http://localhost:8888/api/private/v1/`users/${id}/state/${mgState}`"
      );
      console.log(id);
    },
    // 点击跳转点击的页码数据
    changePage(curPage) {
      console.log('页面改变了',curPage);
      // 把取到的curPage赋值给pagenum,重新渲染页面;
      this.loadUsersList(curPage, this.searchText);
    },
    // 查找
    startQuery() {
      console.log(this.searchText);

    }
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
.el-input {
  width: 630px;
  margin-bottom: 20px;
}

.el-pagination {
  margin-top: 20px;
}
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
