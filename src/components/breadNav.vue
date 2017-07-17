<template>
	<div>
		<div class="tabbar">
			<strong>您当前的位置:</strong>
			<router-link :to="item.path" v-for="(item, index) in navTitle" key='index'>
				<span>{{item.title}}</span><em v-if="index==navTitle.length-1 ? false : true">></em>
			</router-link>
		</div>
	</div>
</template>

<script>
	export default{
		data() {
			return {
				navTitle:[],
				mapArr:[
					{path:'',title:'首页'},
					{path:'footOne',title:'优先保证'},
					{path:'footTwo',title:'全程监控'},
					{path:'footThree',title:'礼拜五特惠'},
					{path:'footFour',title:'基地直供'},
					{path:'footFive',title:'优先准时送达保证'},
					
					{path:'home',title:'首页'},
					{path:'all',title:'全部商品'},
					
					
					{path:'local',title:'同城'},
					{path:'friday',title:'礼拜五'},
					{path:'integral',title:'积分商城'}
				]
			}
		},
		methods:{},
		created() {
			/*
			 * arr: path以"/"分割的数组
			 * pathStr :相对title对应的路由跳转的path
			 */
			var arr = this.$route.path.split("/");
			var pathStr = "/";
			for(var i=0; i<arr.length;i++) {
				for (var j = 0; j < this.mapArr.length; j++) {
					if (arr[i]==this.mapArr[j].path) {
						pathStr += arr[i];
						this.navTitle.push({path:pathStr,title:this.mapArr[j].title});
					}
				}
			}
//			console.log(this.navTitle);
		}
	}
</script>

<style scoped>
.tabbar{
	width: 1280px;
	margin: 20px auto;
	background-color: #f4f4f4;
	font-size: 14px;
	color: #666;
	padding: 20px 0;
}
.tabbar strong{
	padding: 20px 20px;
}
.tabbar span{
	padding: 20px 10px;
}
</style>