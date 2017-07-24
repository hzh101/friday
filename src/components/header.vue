<template>
	<div class="tlw-top-nav">
		<!--header-->
		<div class="nav-second-lyc">
			<a href=""><h1><img src="../img/1.png"/></h1></a>	
			<input type="text" placeholder="请输入关键字进行搜索"/>
			<button>搜</button>
			<div class="nav-second-user-lyc">
				<router-link to='/user/index'>
					<img src="../img/3.png" alt="" />&nbsp;&nbsp;<a href="javascript:;"><span>个人中心</span></a>
				</router-link>
			</div>
			<router-link to='/shoppCar'>
				<div class="nav-second-shoppingcar-lyc">
					<img src="../img/6.png" alt="" />&nbsp;&nbsp;<a href="javascript:;"><span>购物车</span></a>
					<em>0</em>
					<img src="../img/dhk.png" alt="" />
				</div>
			</router-link>
			<div class="nav-second-bottom-lyc">
				<a href="javascript:void(0)">热门:</a>
				<a href="">杂粮饭</a>
				<a href="">辣椒酱</a>
				<a href="">水果礼篮</a>
				<a href="">擦玻璃</a>
				<a href="">苹果</a>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>

.nav-second-lyc {
	width: 1280px;
	height: 100px;
	margin: 0 auto;
	margin-top: 25px;
	position: relative;
	margin-bottom: 50px;
}
.nav-second-lyc a h1 {
	margin-top: 10px;
	display: inline-block;
}
.nav-second-lyc input {
	display: inline-block;
	width:456px;
	height:40px;
	color:#666;
	font-size:14px;
	padding-left:15px;
	box-sizing:border-box;
	border:2px solid green;
	position: absolute;
	bottom: 30px;
	margin-left: 103px;
}
.nav-second-lyc button {
	display: inline-block;
	width:40px;
	height:40px;
	background:green;
	position:absolute;
	bottom: 30px;
	right:311px;
	text-align:center;
	cursor: pointer;
	color: #FFFFFF;
	font-size: 16px;
}
.nav-second-user-lyc, .nav-second-shoppingcar-lyc {
	display: inline-block;
	width: 127px;
	height: 40px;
	border: 1px solid #e5e5e5;
	background: #f8f8f6;
	text-align: center;
	font-size: 16px;
	line-height: 40px;
}
.nav-second-user-lyc {
	position: absolute;
	right: 145px;
	bottom: 30px;
}
.nav-second-user-lyc a{color: #000;}
.nav-second-shoppingcar-lyc {
	position: absolute;
	right: 0;
	bottom: 30px;
}
.nav-second-shoppingcar-lyc img:last-child {
	position: absolute;
	top: -12px;
	left: 40px;
}
.nav-second-shoppingcar-lyc em {
	display: inline-block;
	position: absolute;
	top: -22px;
	left: 46px;
	color: #FFFFFF;
	z-index: 1;
}
.nav-second-bottom-lyc {
	position: absolute;
	left: 466px;
	bottom: 5px;
}
.nav-second-bottom-lyc a {
	display: inline-block;
	padding: 0 7px;
	font-size: 14px;
	color: #666;
}
.nav-third-lyc {
	margin-top: 38px;
	width: 1280px;
	height: 50px;
}
</style>