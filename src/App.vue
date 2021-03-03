<template>
  <div id="app" class="app">
   <router-view/>
   <el-backtop target=".app"></el-backtop>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
.app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  overflow-x: hidden;
  height: 100vh;
}
.el-main {
	padding: 0px;
}
.el-container{
	width: 1280px;
	margin:0px auto;
}
@media screen and (max-width: 500px) {
    .el-container{
    	width: 100%;
    }
}
</style>
