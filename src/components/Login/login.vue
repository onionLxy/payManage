<template>
  <el-form ref="form" :model="form" label-width="80px" :label-position="labelPosition" size="medium">
    <el-row>
      <el-col :span="24">
        <img class="logo" src="../../assets/union.png" alt="">
        <h1 class="title">物联网后台管理系统</h1>
      </el-col>
    </el-row>
    <el-form-item label="用户名">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="密码">
      <el-input v-model="form.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onSubmit">登陆</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
export default {
  data() {
    return {
      form: {
        labelPosition:'left',
        name:"",
        password:"",
      }
    }
  },
  methods: {
    onSubmit() {
      console.log("submit!")
    }
  }
};
</script>
<style>
html{
  background: url(../../assets/time.jpg);
  background-size:cover
}
body {
  width: 100%;
}
* {
  margin: 0;
  padding: 0;
}

</style>
<style lang="less" scoped>
.el-form {
  width: 25%;
  height:300px;
  background-color: #fff;
  margin:230px auto;
  border-radius:8px;
  .el-row {
    height: 60px;
    background-color: #3399FF;
    position: relative;
    margin-bottom: 30px;
    border-radius:8px 8px 0 0 ;
    .logo {
      width: 42px;
      height: 25px;
      background-position: cover;
      position: absolute;
      left: 5%;
      top:50%;
      transform: translateY(-50%);
    }
    .title {
      text-align: center;
      line-height: 60px;
      color:#fff
    }
  }
}
</style>
