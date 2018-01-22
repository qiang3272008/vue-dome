<template>
  <el-row class="header-page">
    <el-col :span="10" class="title" >
      金财教育管理系统
    </el-col>
    <el-col :span="10">
      <div class="tools">
        <i class=""></i>
      </div>
    </el-col>
    <el-col :span="4" class="userinfo">
        <el-dropdown trigger="hover">
          <span class="el-dropdown-link userinfo-inner"><img src="./user.png" alt="">降临</span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item>设置</el-dropdown-item>
            <el-dropdown-item>退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
    </el-col>
  </el-row>
</template>

<script>
  export default {}
</script>

<style lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  .header-page
    height: 60px;
    line-height: 60px;
    color:#fff;
    .title
      height:60px;
      font-size: 22px;
      padding-left:20px;
      padding-right:20px;
    .userinfo
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner
        cursor: pointer;
        color:#fff;
        img
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
</style>

