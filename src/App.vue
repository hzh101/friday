<template>
  <div id="app">
	  	<top-nav></top-nav>
	  	<heads></heads>
	  	<cont-nav></cont-nav>
	  	<router-view></router-view>
    <bottom-nav></bottom-nav>
    <foot></foot>
  </div>
</template>

<script>
	import topNav from 'components/topNav';
	import heads from 'components/header';
	import contNav from 'components/contNav';
	import bottomNav from 'components/bottomNav';
	import foot from 'components/footer';
	
	import router from './router';
	
//	router.afterEach((to, from, next) => {
//	  console.log(from.query);
//	});
	
export default {
	data(){
		return{
		}
	},
  name: 'app',
  components:{
  		topNav,
  		heads,
		contNav,
		bottomNav,
		foot
  }
}
</script>

<style scoped>

</style>
