<template>
	<el-container>
	  <el-header><Header /></el-header>
	  <el-main>{{$t('home.main')}}</el-main>
	  <el-footer><Footer /></el-footer>
	</el-container>
</template>

<script>
	import Header from '@/components/common/Header'
	import Footer from '@/components/common/Footer'
	export default{
		name: "Home",
		components:{Header, Footer}
	}
</script>

<style scoped="scoped">
	.el-footer,.el-header {
	    background-color: #545c64;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
		height: 60px;
	  }
</style>
