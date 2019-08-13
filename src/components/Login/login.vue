<template>
  <el-form
    :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px"
  >
    <div class="panel-heading">
      <img  class='union_logo' src="../../assets/union.png" />
      <h1 class="panel-title">物联网支付标记管理平台</h1>
    </div>
    <div class="panel-body">
        <el-form-item
          label="用户名"
          prop="username"
        >
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
        <el-form-item
          label="密码"
          prop="password"
        >
          <el-input v-model="ruleForm.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >登陆</el-button
          >
          <el-button  @click="resetForm('ruleForm')">重置</el-button>
        </el-form-item>
    </div>
  </el-form>
</template>
<script>
/* eslint-disable */
export default {
    data() {
      return {
        ruleForm: {
          username: 'admin',
          password: '123456',
        },
        rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'change' },
            { min: 3, max: 6, message: '长度在 3 到 6 个字符', trigger: 'blur' }
          ],
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {

          } else {
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
  }

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
html {
  height: 100%;
}
body {
    height: 100%;
    background: url(../../assets/timg.jpg);
    background-size: cover;
    position: relative;
}
* {
  margin: 0;
  padding: 0;
}
</style>
<style lang='less' scoped >
.el-form {
    width:25%;
    height: 20%;
    position: absolute;
    left: 50%;
    top:25%;
    transform: translate(-50%,0);
  .panel-heading {
      height: 100px;
      position: relative;
      background:#337AB7;
  .union_logo {
      display: block;
      width: 84px;
      height: 50px;
      background-position: center center;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      margin-left: 30px;
  }
.panel-title {
    height: 100px;
    line-height: 100px;
    text-align: center;
    margin-left: 50px;
    font-size: 30px;
    font-family:inherit;
    color:#fff;

  }
}
.panel-body {
  height: 350px;
  background:#fff;
  padding:50px 70px;
  box-sizing: border-box;
    .el-form-item {
      margin-bottom:35px;
    }
}
}


</style>
