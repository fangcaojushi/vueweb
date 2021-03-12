<template>
	<el-container>
		<el-header>
			<Header />
		</el-header>
		<el-main>
      <el-carousel :interval="5000" arrow="never" :height="carouselHeight">
				<el-carousel-item v-for="(item, index) in banners" :key="index">
          <img :src="item.oUrl" class="banner" />
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
    // props:{
    //   carouselHeight:{
    //     type:String,
    //     default:"438px"
    //   }
    // },
    data(){
      return {
        banners: [],
        by:""
      }
    },
    beforeMount:function(){
      // this.carouselHeight = $(window).width()*664/1920 + 'px';
      let _w = document.documentElement.clientWidth || document.body.clientWidth
      if(_w<700){
        _w = 700
      }
      this.carouselHeight = _w * 400/1920 + 'px'
    },
    mounted(){
      axios.get(this.GLOBAL.baseUrl+"/api/webCloudLive/liveMeeting?liveMeetingId=1&lang=cn")
      .then(res => {
        this.banners = res.data.data.banners
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
		line-height: 60px;
		height: 60px;
		z-index: 999;
    text-align: left;
	}
	/* 焦点图 */
  .el-carousel {
       .el-carousel__item--card {
          width: auto !important;
        }
        .el-carousel__item {
          width: auto !important;
        }
       .el-carousel__item--card.is-active {
          z-index: 2;
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0px) !important;
        }
      }
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
  .banner{
    width: auto;
    height: 100%;
  }
   /*@media screen and (max-width: 768px) {
     .banner{
       height: 200px;
     }
  } */
</style>
