<template>
<!-- 外部容器 -->
<el-container>
<!-- 左侧 -->
<el-aside style='background-color:#353b4e; height:100vh;width:220px'>
  <layout-aside></layout-aside>
</el-aside>
<el-container>
  <!-- 顶部 -->
  <el-header>
   <herder></herder>
  </el-header>
  <!-- 内容 -->
  <el-main>内容区域</el-main>
</el-container>
</el-container>
</template>

<script>

export default {
  components:{

  }
}
</script>

<style>

</style>