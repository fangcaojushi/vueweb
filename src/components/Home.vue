<template>
	<el-container>
		<el-header>
			<Header />
		</el-header>
		<el-main>
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="item in 4" :key="item">
					<h3>{{ item }}</h3>
				</el-carousel-item>
			</el-carousel>
		</el-main>
		<el-footer style="margin-top:1000px ;">
			<Footer />
		</el-footer>
	</el-container>
</template>

<script>
	import Header from '@/components/common/Header'
	import Footer from '@/components/common/Footer'
	export default {
		name: "Home",
		components: {
			Header,
			Footer
		}
	}
</script>

<style scoped="scoped">
	.el-footer,
	.el-header {
		background-color: #545c64;
		color: #333;
		text-align: center;
		line-height: 60px;
		height: 60px;
		z-index: 999;
	}
	/* 焦点图 */
	.el-carousel__item h3 {
	color: #475669;
	font-size: 18px;
	opacity: 0.75;
	line-height: 300px;
	margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
	background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
	background-color: #d3dce6;
  }
</style>

