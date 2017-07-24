<template>
  <div id="app">
	  	<top-nav></top-nav>
	  	<heads></heads>
	  	<router-view></router-view>
    <bottom-nav></bottom-nav>
    <foot></foot>
  </div>
</template>

<script>
	import topNav from 'components/topNav';
	import heads from 'components/header';
	import bottomNav from 'components/bottomNav';
	import foot from 'components/footer';
	
	import router from './router';
	
	
export default {
	data(){
		return{
			
		}
	},
name: 'app',
  components:{
  		topNav,
		heads,
		bottomNav,
		foot
  }
}
</script>

<style scoped>

</style>
