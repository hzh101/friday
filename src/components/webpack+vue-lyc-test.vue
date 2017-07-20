<template>
	<div>
		<h1>{{obj.name}}</h1>
		<img :src='a'>
	</div>
</template>

<script>
	export default {
	    data(){
	      	return {
	      	    obj:{},
				a:''
			}
		},
        created(){
			this.$http.get('http://localhost:8080/getImg').then(function (res) {
//                    console.log(res.data)
				this.obj = res.data[0];
//				this.a = require('imgs/'+res.data[0].images)

			})
		}
	}
</script>

<style scoped>
	
	h1{
		font-size: 30px;
		padding-left: 20px;
	}
</style>