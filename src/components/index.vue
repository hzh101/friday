<template>
	<div>
	<cont-nav></cont-nav>
	<router-view></router-view>
	</div>
</template>

<script>
	import contNav from 'components/contNav';
	
	export default{
		components:{
			contNav
		}
	}
</script>

<style scoped>
</style>