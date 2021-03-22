<template>
	<el-container>
		<el-header>
			<Header />
		</el-header>
		<el-main>
		  <el-carousel :interval="5000" indicator-position="outside" :height="carouselHeight">
			<el-carousel-item v-for="(item, index) in banners" :key="index">
			  <!-- <v-touch :swipe-options="{direction: 'horizontal'}" v-on:swipeleft="swiperleft(index)" v-on:swiperight="swiperright(index)" class="wrapper"> -->
        <v-touch :swipe-options="{direction: 'horizontal'}" class="wrapper">
          <img :src="item.oUrl" class="banner" />
			  </v-touch>
			</el-carousel-item>
		   </el-carousel>
		</el-main>
		<el-footer style="margin-top:1000px;">
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
		},
    methods:{
       //设置滑动切换轮播图
      swiperleft: function (index) {
        //上一页
        this.$refs.carousel.prev();
        //设置幻灯片的索引
        this.$refs.carousel.setActiveItem(index - 1);
      },
      swiperright: function (index) {
        //下一页
        this.$refs.carousel.next();
        this.$refs.carousel.setActiveItem(index + 1);
      }
    }
	}
</script>

<style scoped="scoped">
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
    width: 100%;
    height: 100%;
  }
  .wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    touch-action: pan-y !important;
  }
</style>
<style>
  .el-footer,
  .el-header {
  	background-color: #545c64;
  	color: #333;
  	line-height: 60px;
  	height: 60px;
  	z-index: 999;
    text-align: left;
  }
</style>
