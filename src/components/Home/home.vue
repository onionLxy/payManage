<template>
  <el-container>
    <!-- 头部 -->
    <el-header style="height: 72px;">
      <el-row>
        <el-col :span="8">
          <img class="pic" src="../../assets/logo.png" />
        </el-col>
        <el-col :span="8">
          <h1>物联网支付标记管理平台</h1>
        </el-col>
        <el-col class="admin" :span="6">
          <span><i class="el-icon-s-custom"></i>admin</span>
        </el-col>
        <el-col class="out" :span="2"
          ><a href="#" @click.prevent="logout">退出</a></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <!-- 侧边栏 -->
      <el-aside>
          <el-menu
            default-active="2"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b"
          >
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">设备厂商管理</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">设备管理123</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-menu"></i>
              <span slot="title">商户管理</span>
            </el-menu-item>
          </el-menu>
      </el-aside>
      <el-main>Main</el-main>
    </el-container>
  </el-container>
</template>

<script>
/*eslint-disable */
export default {
  methods: {
    // 退出登陆
    logout() {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          localStorage.removeItem("token");
          this.$router.push("/login");
          this.$message({
            type: "success",
            message: "删除成功!"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          })
        })
    },
    // 侧边栏菜单打开与关闭的检测
    handleOpen(key, keyPath) {
      console.log("打开了");
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  height: 100%;
}
</style>
<style lang="less" scoped>
.el-container {
  height: 100%;
}
.el-header {
  height: 72px;
  background-color: #304156;
  color: #333;
  text-align: center;
  padding: 0;
  .pic {
    width: 300px;
    height: 72px;
  }
  h1 {
    height: 72px;
    line-height: 72px;
    color: #fff;
    font-size: 30px;
  }
  .out {
    display: block;
    height: 72px;
    line-height: 72px;

    a {
      color: #fff;
      font-size: 30px;
      text-decoration: none;
      float: right;
      margin-right: 30px;
    }
  }
  .admin {
    height: 72px;
    line-height: 72px;
    margin: auto auto;
    span {
      display: block;
      float: right;
      font-size: 34px;
      color: #fff;
    }
  }
}

.el-aside {
  width: 300px !important;
  background-color: #304156;
  text-align: center;
  line-height: 200px;
  .el-menu-item {
    margin:auto 0;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.pic {
  float: left;
  margin: auto 0;
}
</style>
