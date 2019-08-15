<template>
    <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="80px" size="medium">
    <el-row>
      <el-col :span="24">
        <img class="logo" src="../../assets/union.png" alt="">
        <h1 class="title">物联网后台管理系统</h1>
      </el-col>
    </el-row>
    <el-form-item label="用户名" prop="username">
      <el-input v-model="ruleForm.username"></el-input>
    </el-form-item>
    <el-form-item label="密码" prop="password">
      <el-input v-model="ruleForm.password"></el-input>
    </el-form-item>

    <el-form-item>
      <el-button type="primary" @click="onLogin">登陆</el-button>
      <el-button @click='resetForm'>重置</el-button>
    </el-form-item>
  </el-form>
</template>
<script>
/* eslint-disable */
import axios from '../../../node_modules/axios/dist/axios.js'
export default {
  data() {
    return {
      ruleForm: {
        username:"admin",
        password:"123456",
      },
      rules: {
          username: [
            { required: true, message: '请输入用户名', trigger: 'blur' },
            { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入用户密码', trigger: 'blur' },
            { min: 6, max: 8, message: '长度在 6 到 8 个字符', trigger: 'blur' }
          ],
        },
    }
  },
    methods: {
      onLogin() {
        this.$refs.ruleForm.validate((valid) => {
          if (!valid) {
            alert('输入有误，登陆失败')
            return false;
          } else {
            // 校验成功，发送请求，开始登陆；
            axios.post('http://localhost:8888/api/private/v1/login',this.ruleForm).then(res => {
              console.log(res);
              if(res.data.meta.status == 200) {
                // 提示登陆成功
                this.$message({
                  // title: '成功',
                  message: res.data.meta.msg,
                  type: 'success',
                  duration:800,
                })
                //页面跳转（编程式导航）
                this.$router.push('/home')
              }



            })
    }

  })
},
 resetForm() {
        this.$refs.ruleForm.resetFields()
  }
}

}
</script>
<style lang="less" scoped>
  .el-form {
   width: 25%;
   height:320px;
   background-color: #fff;
   margin:15% auto 0;
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
   .el-input.el-input--medium {
     width:90%;
   }
 }
</style>
