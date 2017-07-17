<template>
	<div>
		<div class="tlw-more-things">
			<ul class="tlw-more-products">
				<li>
					<router-link to='/detail'>
						<img src="../images/13.jpg" />
							<h3>团聚礼盒</h3>
					</router-link>
					<p>￥1<strong>￥2</strong></p>
					<img class="tlw-shoppingCar" src="../images/8.png" />
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
	export default{}
</script>

<style scoped>
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