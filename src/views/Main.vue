<template>
  <div>
    <el-container style="height: 100vh">
  <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
    <el-menu router  unique-opened :default-active="$route.path">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>订单管理</template>
        <el-menu-item-group>
          <template slot="title">订单管理</template>
          <el-menu-item index="/orders/create">编辑订单</el-menu-item>
          <el-menu-item index="/orders/list">订单列表</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
      <el-submenu index="2">
        <template slot="title"><i class="el-icon-message"></i>内容管理</template>
        <el-menu-item-group>
          <template slot="title">菜品</template>
          <el-menu-item index="/items/create">新建菜品</el-menu-item>
          <el-menu-item index="/items/list">菜品列表</el-menu-item>
        </el-menu-item-group> 
        <el-menu-item-group>
          <template slot="title">分类</template>
          <el-menu-item index="/categories/create">新建分类</el-menu-item>
          <el-menu-item index="/categories/list">分类列表</el-menu-item>
        </el-menu-item-group> 
      </el-submenu>
      <el-submenu index="3">
        <template slot="title"><i class="el-icon-message"></i>账号管理</template>
          <el-menu-item-group>
            <template slot="title">管理员</template>
            <el-menu-item index="/admin_users/create">新建管理员</el-menu-item>
            <el-menu-item index="/admin_users/list">管理员列表</el-menu-item>
          </el-menu-item-group> 
           <el-menu-item-group>
            <template slot="title">普通用户</template>
            <el-menu-item index="/normal_users/create">新建用户</el-menu-item>
            <el-menu-item index="/normal_users/list">用户列表</el-menu-item>
          </el-menu-item-group> 
      </el-submenu>
      
    </el-menu>
  </el-aside>
  
  <el-container>
    <el-header style="text-align: right; font-size: 12px">
      <el-dropdown>
        <i class="el-icon-setting" style="margin-right: 15px"></i>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>查看</el-dropdown-item>
          <el-dropdown-item>新增</el-dropdown-item>
          <el-dropdown-item>删除</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
      <span>王小虎</span>
    </el-header>
    <el-main>
      <router-view></router-view>
    </el-main>
  </el-container>
  </el-container>
  </div>
</template>

<style>
  .el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
</style>

<script>
  export default {
    // data() {
      
    // }
  };
</script>