<template>
  <div id="app">
	  	<top-nav></top-nav>
	  	<heads></heads>
	  	<keep-alive>
		  	<router-view></router-view>
	  	</keep-alive>
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
