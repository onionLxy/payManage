<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="3" class="logo"
          ><img src="../../assets/union.png" alt=""
        /></el-col>
        <el-col :span="15"
          ><div class="grid-content bg-purple-light">222</div></el-col
        >
        <el-col :span="6"><div class="grid-content bg-purple">333</div></el-col>
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
                <el-menu-item index="1-2">菜单明细</el-menu-item>
              </el-submenu>
              <el-menu-item index="2">
                <i class="el-icon-menu"></i>
                <span slot="title">用户管理</span>
              </el-menu-item>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>Main</el-main>
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
  color: #333;
  text-align: center;
  line-height: 60px;
  margin: 0;
  padding: 0;
  .logo {
    width: 200px;
    position: relative;
  }
  img {
    width: 68px;
    height: 40px;
    position: absolute;
    left:0;
    top:50%;
    transform: translate(0%,-50%)
  }
  .bg-purple-light {
    background-color: skyblue;
  }
}

.el-aside {
  width: 200px;
  color: #333;
  text-align: center;
  line-height: 200px;
  .el-menu-vertical-demo.el-menu {
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
