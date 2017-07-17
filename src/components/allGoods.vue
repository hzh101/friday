<template>
	<div>
		<bread-nav></bread-nav>
		<div class="zh-kind">
			<dl class="zh-firstType">
				<dt>一级分类:</dt>
				<dd @click="bol = !bol" :class="'activebg'">全部</dd>
				<router-link :to='item.path' tag='dd' v-for="(item,index) in route" @click="showItem(index)" key='index'>
					{{item.title}}
				</router-link>
			</dl>
			<dl class="zh-secondType" v-show="bol">
				<dt>二级分类:</dt>
				<dd :class="'activebg'">全部</dd>
				<router-link :to='value.path' v-for="(value,index) in itemArr" tag='dd' key='index'>
					{{value.title}}
				</router-link>
			</dl>
			<div class="zh-srot">
				<dl class="zh-way">
					<dt>排序:</dt>
					<dd :class="'activebd'">销量从低到高</dd>
					<dd>价格从低到高</dd>
					<dd>评价从低到高</dd>
				</dl>
				<dl class="zh-filter">
					<dt>筛选:</dt>
					<dd :class="'activebg'">全部</dd>
					<dd>全国</dd>
					<dd>同城</dd>
					<dd>次日到达</dd>
				</dl>
			</div>
		</div>
		<router-link to='/home/all/a'>点我</router-link>
		<!--<more-goods></more-goods>-->
		<router-view></router-view>
	</div>
</template>

<script>
	import typeRoute from '../data/typeRoute.json';
	
	import breadNav from './breadNav';
	import moreGoods from './moreGoods';
	
	export default{
		data() {
			return {
				bol:true,
				itemArr:[],
				route:typeRoute.route
			}
		},
		components:{ breadNav, moreGoods },
		methods:{
			showItem(index) {
				this.itemArr = this.route[index].items;
			}
		}
	}
</script>

<style scoped>
	
.zh-kind{
	width: 1280px;
	margin: 0 auto;
}
.zh-kind dl{
	overflow: hidden;
	border-bottom: 1px solid #ddd;
}
.zh-kind dt,.zh-kind dd{
	float: left;
	padding: 10px 15px;
	margin: 15px 10px;
	font-size: 14px;
}
.zh-srot{
	height: 60px;
	padding-top: 10px;
}
.zh-srot .zh-way{
	float: left;
	width: 600;
	border: none;
}
.zh-srot .zh-way dd{
	border: 1px solid #ddd;
}
.zh-kind .zh-srot .zh-filter{
	float: right;
	width: 435px;
	border: none;
}
.zh-srot .zh-filter dd{
	/*background-color: #4B943D;*/
}
.activebg,.zh-kind dd:hover{
	background-color: #4B943D;
	color: #fff;
	font-weight: 400;
}
.activebd,.zh-kind .zh-way dd:hover{
	background-color: #fff;
	border: 1px solid #4B943D;
	color: #4B943D;
}
</style>