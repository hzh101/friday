<template>
  <div id="app">
	  	<top-nav :message="strings"></top-nav>
	  	<heads></heads>
	  	<keep-alive>
		  	<router-view @logins="shows" @register="regs"></router-view>
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
	data(){
		return{
			strings:{
				log:"登录",
				reg:"注册"
				}
		}
	},
  components:{
  		topNav,
		heads,
		bottomNav,
		foot
  },
  methods:{
  		shows:function(data){
  			this.strings.log = data;
  		},
  		regs:function(data){
  			this.strings.reg = data;
  		}
  }
}
</script>

<style scoped> 
</style>
