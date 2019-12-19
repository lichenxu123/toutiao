<template>
  <div class="login">
    <el-card class="login-card">
      <div class="title">
        <img src="../../assets/img/logo_index.png" alt />
      </div>
      <!-- 表单   -->
      <el-form ref="myform" :model="loginForm" :rules="loginRules" style="margin-top:30px">
        <el-form-item prop="mobile">
          <el-input v-model="loginForm.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-input v-model="loginForm.code" style="width:60%" placeholder="请输入验证码"></el-input>
          <el-button style="float:right">发送验证码</el-button>
        </el-form-item>
        <el-form-item prop="check">
          <el-checkbox v-model="loginForm.check">我已阅读并同意用户协议和隐私条款</el-checkbox>
        </el-form-item>
        <el-form-item>
          <el-button type="primary"  @click="submit"  style="width:100%">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
 
<script>
export default {
  data() {
    return {
      loginForm: {
        mobile: "",
        code: "",
        check: false
      },
      loginRules: {
        mobile: [
          { required: true, message: "请输入您的手机号" },
          {
            pattern: /^1[3456789]\d{9}$/,
            message: "手机号格式不正确"
          }
        ],
        code: [
          { required: true, message: "请输入您的验证码" },
          {
            pattern: /^\d{6}$/,
            message: "验证码不正确"
          }
        ],
        check: [
          {
            validator: function(rule, value, callback) {
              if (value) {
                callback();
              } else {
                callback(new Error('必须勾选此按钮'))
              }
            }
          }
        ]
      }
    };
  },
  methods:{
    submit(){
      this.$refs.myform.validate((isOk)=>{
         if(isOk){
           this.$axios({
             url:'/authorizations',
             method : 'post',
             data:this.loginForm
           }).then(result => {
            // console.log(result)
            window.localStorage.setItem('user-token',result.data.data.token);
            
            
            this.$router.push('/home')
           }).catch(() =>{
               this.$message.error('手机号或者验证码错误');
           })
         }
      })
    }
  }
};
</script>

<style lang="less" scoped >
.login {
  background-image: url("../../assets/img/login_bg.jpg");
  background-size: cover;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-card {
    height: 380px;
    width: 350px;
    .title {
      text-align: center;
      img {
        height: 40px;
      }
    }
  }
}
</style>