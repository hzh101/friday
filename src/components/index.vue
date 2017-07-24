<template>
	<div>
<<<<<<< HEAD
		<cont-nav></cont-nav>
		<router-view></router-view>
=======
	<cont-nav></cont-nav>
	<keep-alive>
		<router-view></router-view>
	</keep-alive>
>>>>>>> 97dd612336f714b238f3a738f12b1dcb166f0897
>>>>>>> 627c4b5a0b4b04d91ed2e438317d56ae28aac06e
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