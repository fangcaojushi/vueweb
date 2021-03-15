<template>
  <div>
    <el-row :gutter="20">
      <el-col :xs="6" :sm="6" :md="4" :lg="2" :xl="2">
        <img src="@/assets/logo.png" class="logo" />
      </el-col>
      <el-col :xs="12" :sm="12" :md="16" :lg="20" :xl="20">
        <i class="el-icon-s-fold menubar" @click="openMenu"></i>
        <el-menu :default-active="activeIndex2" class="el-menu-demo" :mode="menuMode" v-show="menuShow"
          @select="handleSelect" background-color="#545c64" text-color="#fff" active-text-color="#ffd04b">
          <el-menu-item index="home">{{$t('menu.home')}}</el-menu-item>
          <el-submenu index="2">
            <template slot="title">{{$t('menu.news')}}</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
          </el-submenu>
          <el-menu-item index="3">{{$t('menu.product')}}</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">{{$t('menu.about')}}</a></el-menu-item>
        </el-menu>
      </el-col>
      <el-col :xs="6" :sm="6" :md="4" :lg="2" :xl="2">
        <el-select v-model="value" placeholder="请选择" @change="changeLanguage" class="maxlangW"
          style="border-radius: 30px">
          <el-option v-for="item in langs" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <!-- <el-col :xs="3" :offset="7" class="hidden-sm-and-up">
        <i class="el-icon-s-fold" @click=""></i>
      </el-col> -->
    </el-row>
  </div>
</template>

<script>
  import 'element-ui/lib/theme-chalk/display.css'
  export default {
    data() {
      return {
        activeIndex2: '1',
        langs: [{
          value: 'cn',
          label: '中文'
        }, {
          value: 'en',
          label: '英语'
        }],
        value: this.$i18n.locale,
        menuMode: "horizontal",
        menuShow: true
      };
    },
    watch: {
      $route() {
        debugger
        if (this.$route.meta.parentPath) {
          this.pagedefault = this.$route.meta.parentPath; // 实现路由切换
        }
      }
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      },
      changeLanguage() {
        this.$i18n.locale == 'cn' ? this.$i18n.locale = 'en' : this.$i18n.locale = 'cn' //设置中英文模式
        this.$i18n.locale = this.value
        this.language = this.value
        localStorage.setItem('languageSet', this.$i18n.locale) //将用户设置存储到localStorage以便用户下次打开时使用此设置
        // window.location.reload()
      },
      openMenu() {
        // debugger
        this.menuMode = "vertical"
        this.menuShow = !this.menuShow
      }
    }
  }
</script>

<style scoped="scoped">
  .el-icon-s-fold {
    line-height: 60px;
    font-size: 40px;
    color: #fff;
  }

  .maxlangW {
    max-width: 80px;
  }

  .logo {
    width: auto;
    height: 55px;
  }

  .el-menu {
    border: 0;
  }
  .menubar{
    display: none;
  }
  .el-menu{
    display: block;
  }
  .el-icon-s-fold:before{
    background-color: #545c64;
  }
  @media screen and (max-width: 500px) {
    .menubar{
      position: fixed;
      right: 10px;
      display: block;
    }
    .el-menu{
      /* display: none; */
    }
    .el-menu {
      width: 100%;
      max-width: 120px;
      position: fixed;
      right: 0px;
      top: 50px;
    }
  }
</style>
