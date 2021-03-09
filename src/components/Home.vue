<template>
	<el-container>
		<el-header>
			<Header />
		</el-header>
		<el-main>
			<el-carousel indicator-position="outside">
				<el-carousel-item v-for="(item,index) in banners" :key="index">
          <img :src="item.oUrl" />
					<!-- <h3>{{ index }}</h3> -->
				</el-carousel-item>
			</el-carousel>
		</el-main>
		<el-footer style="margin-top:1000px ;">
			<Footer />
		</el-footer>
	</el-container>
</template>

<script>
  const axios = require('axios')
	import Header from '@/components/common/Header'
	import Footer from '@/components/common/Footer'
	export default {
		name: "Home",
    data(){
      return {
        banners: [],
        by:""
      }
    },
    mounted(){
      axios.get(this.GLOBAL.baseUrl+"/api/webCloudLive/liveMeeting?liveMeetingId=1&lang=cn")
      .then(res => {
        this.banners = res.data.banners
      })
    },
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
