<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3" class="logo">
          <img src="../../assets/union.png" alt="" />
          <span class="font">中国银联</span>
        </el-col>
        <el-col :span="18" class="title"
          ><div class="grid-content bg-purple-light">
            <h1>物联网后台管理系统</h1>
          </div></el-col
        >
        <el-col :span="3" class="right"
          ><div class="grid-content bg-purple">
            <span class="user">
              <i class="el-icon-s-custom"></i>
              admin</span
            >
            <span class="layOut">退出</span>
          </div></el-col
        >
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-row class="tac">
          <el-col :span="12"> </el-col>
          <el-col :span="12">
            <el-menu
              default-active="2"
              class="el-menu-vertical-demo"
              @open="handleOpen"
              @close="handleClose"
              background-color="#545c64"
              text-color="#fff"
              active-text-color="#ffd04b"
            >
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-location"></i>
                  <span>菜单管理</span>
                </template>

                <el-menu-item index="1-1">菜单列表</el-menu-item>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
/* eslint-disable */
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="less" scoped>
/* 容器 */
.el-container {
  height: 100%;
  min-width: 900px;
}

.el-header {
  background-color: rgb(84, 92, 100);
  text-align: center;
  line-height: 60px;
  margin: 0;
  padding: 0;
  .logo {
    width: 200px;
    height: 60px;
    position: relative;
    img {
      width: 68px;
      height: 40px;
      position: absolute;
      left: 6%;
      top: 50%;
      transform: translateY(-50%);
    }
    .font {
      font-size: 20px;
      color: #fff;
      padding-left: 28%;
    }
  }
  .title {
    h1 {
      font-size: 30px;
      color: #fff;
    }
  }
  .right {
    padding: 0 20px;
    .user {
      float: left;
      font-size: 20px;
    }
    .layOut {
      float: right;
      font-size: 20px;
    }
  }
}

.el-aside {
  width: 200px;
  text-align: center;
  line-height: 200px;
  background-color: rgb(84, 92, 100);
  .el-menu-vertical-demo {
    width: 200px;
  }
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
</style>
