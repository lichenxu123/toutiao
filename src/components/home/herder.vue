<template>
  <el-row class="zuo" type="flex" align="middle" justify="space-between">
    <el-col class="tu" :span="6">
      <i class="el-icon-s-unfold"></i>
      <span class="xixi">乔乔磊乔磊乔磊乔磊乔磊磊</span>
    </el-col>
    <el-col class="you" :span="4">
      <el-row type="flex" justify="end" align="middle">
        <img :src="herderIn.photo ? herderIn.photo :defaultImg" alt />
        <el-dropdown @command="dele">
          <span class="el-dropdown-link">
            {{herderIn.name}}
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown" >
            <el-dropdown-item command="info">个人信息</el-dropdown-item>
            <el-dropdown-item command="git">git仓库</el-dropdown-item>
            <el-dropdown-item command="dele">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-row>
    </el-col>
  </el-row>
</template>

<script>
export default {
    data(){
        return{
            herderIn:{},
            defaultImg: require('../../assets/img/404.png') // 先把地址转换成变量
        }
    },
    created(){
        var token = window.localStorage.getItem('user-token')
        console.log(token)
        this.$axios({
            url:'/user/profile',
            method:'get',
            headers:{
                Authorization :`Bearer ${token}`
            }
        }).then(result =>{
            this.herderIn = result.data.data
            // console.log(result)
        })
    },
    methods:{
        dele(){
            window.localStorage.removeItem('user-token'),
            this.$router.push('/login')
        }
    }
}
</script>

<style lang='less' scoped>
.zuo {
  height: 60px;
  .tu {
    font-size: 15px;
    .xixi{
        margin-left: 5px;
    }
  }
  .you {
    img {
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-right: 20px;
    }
  }
    .el-dropdown-link {
    cursor: pointer;
    color: skyblue;
  }
  .el-icon-arrow-down {
    font-size: 18px;
     margin-right: 20px;
  }
}
</style>