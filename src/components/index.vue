<template>
	<div>
	<cont-nav></cont-nav>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
>>>>>>> 97dd612336f714b238f3a738f12b1dcb166f0897

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