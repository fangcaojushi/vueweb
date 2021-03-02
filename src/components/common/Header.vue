<template>
	<div>
		<el-row :gutter="20">
		  <el-col :span="2">
			  <img src="@/assets/logo.png" class="logo"/>
		  </el-col>
		  <el-col :span="18">
			  <el-menu
			    :default-active="activeIndex2"
			    class="el-menu-demo"
			    mode="horizontal"
			    @select="handleSelect"
			    background-color="#545c64"
			    text-color="#fff"
			    active-text-color="#ffd04b">
			    <el-menu-item index="1">{{$t('menu.home')}}</el-menu-item>
			    <el-submenu index="2">
			      <template slot="title">{{$t('menu.news')}}</template>
			      <el-menu-item index="2-1">选项1</el-menu-item>
			      <el-menu-item index="2-2">选项2</el-menu-item>
			      <el-menu-item index="2-3">选项3</el-menu-item>
			      <el-submenu index="2-4">
			        <template slot="title">选项4</template>
			        <el-menu-item index="2-4-1">选项1</el-menu-item>
			        <el-menu-item index="2-4-2">选项2</el-menu-item>
			        <el-menu-item index="2-4-3">选项3</el-menu-item>
			      </el-submenu>
			    </el-submenu>
			    <el-menu-item index="3" disabled>{{$t('menu.guest')}}</el-menu-item>
			    <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">{{$t('menu.meeting')}}</a></el-menu-item>
			  </el-menu>
		  </el-col>
		  <el-col :span="4" align="right">
			  <el-select v-model="value" placeholder="请选择" @change="changeLanguage" class="maxlangW">
			  <el-option
				v-for="item in langs"
				:key="item.value"
				:label="item.label"
				:value="item.value">
			  </el-option>
			</el-select>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
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
			value: this.$i18n.locale
	      };
	    },
	    methods: {
	      handleSelect(key, keyPath) {
	        console.log(key, keyPath);
	      },
		  changeLanguage() {
			  this.$i18n.locale=='cn'?this.$i18n.locale='en':this.$i18n.locale='cn'   //设置中英文模式
			  this.$i18n.locale = this.value
			  this.language = this.value
			  localStorage.setItem('languageSet',this.$i18n.locale)   //将用户设置存储到localStorage以便用户下次打开时使用此设置
			  // window.location.reload()
		  }
	    }
	  }
</script>

<style scoped="scoped">
	.maxlangW{
		max-width: 80px;
	}
	.logo{
		width:auto;
		height: 55px;
	}
</style>
