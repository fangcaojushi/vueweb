<template>
	<el-container>
	  <Header />
	  <el-main>Main</el-main>
	  <el-footer>Footer</el-footer>
	</el-container>
</template>

<script>
	import Header from '@/components/common/Header.vue'
	export default{
		name: "Home",
		components:{Header}
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
