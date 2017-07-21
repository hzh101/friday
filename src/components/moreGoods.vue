<template>
	<div>
		<div class="tlw-more-things">
			<ul class="tlw-more-products" v-show="showGoods[0].name?true:false">
				<li v-for="(item,index) in showGoods" v-show="item.name?true:false" v-if="abc(index)">
					<router-link to="{path:'detail',query:{id:item.id}}">
						<img :src="'static/imgs/'+item.images" />
							<h3>{{item.name}}</h3>
					</router-link>
					<p>￥{{item.price}}<strong>￥{{item.oldPrice}}</strong></p>
					<img class="tlw-shoppingCar" src="../images/8.png" />
				</li>
			</ul>
			<div class="zh-nogoods" v-show="showGoods[0].name?false:true">
				<img src="static/imgs/no-goods.png"/>
			</div>
		</div>
	</div>
</template>

<script>

	
	export default{
		props:["showGoods"]
	}
</script>

<style scoped>
	
.zh-nogoods{
	margin: 50px auto;
}
.tlw-more-things {
	width: 1280px;
	margin: 20px auto;
}
.tlw-more-products {
	overflow: hidden;
}
.tlw-more-products li {
	width: 303px;
	height: 395px;
	border: 1px solid #CCCCCC;
	float: left;
	margin: 20px 20px 20px 0;
	position: relative;
}

.tlw-more-products li:hover {
	border: 1px solid green;
}

.tlw-more-products li:nth-of-type(4n) {
	margin-right: 0;
}

.tlw-more-products li img {
	width: 100%;
}

.tlw-more-products li h3 {
	color: black;
	font-size: 20px;
	padding: 20px 0 15px 20px;
}

.tlw-more-products li p {
	color: red;
	font-size: 20px;
	padding-left: 20px;
}

.tlw-more-products li strong {
	color: #666666;
	font-size: 16px;
	padding: 10px;
	text-decoration: line-through;
}

.tlw-more-products li .tlw-shoppingCar {
	width: 34px;
	height: 30px;
	position: absolute;
	bottom: 10px;
	right: 20px;
}
</style>