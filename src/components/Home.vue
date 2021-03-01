<template>
	<el-container>
	  <el-header><Header /></el-header>
	  <el-main>Main</el-main>
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
	.el-footer {
	    background-color: #B3C0D1;
	    color: #333;
	    text-align: center;
	    line-height: 60px;
	  }
</style>
