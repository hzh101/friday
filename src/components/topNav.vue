<template>
	<div>
		<!--header_first-->
		<div class="nav-first-lyc">
			<div class="nav-first-content-lyc">
				<div class="first-content-left-lyc">
					<span>所在城市:</span>
					<span>&nbsp;哈密市伊州市</span>&nbsp;&nbsp;
					<span></span>
				</div>
				<ul class="first-content-right-lyc">
					<router-link to="/" tag='li' >你好,&nbsp;&nbsp;<span>15093153625</span>&nbsp;&nbsp;|</router-link>
					<router-link to="/tlw1" tag='li'>退出&nbsp;&nbsp;|</router-link>
					<router-link to="/tlw2" tag='li'>我的订单&nbsp;&nbsp;|</router-link>
					<router-link to="/lyc1" tag='li'>我的消息&nbsp;&nbsp;|</router-link>
					<router-link to="/lyc2" tag='li'>我是商家&nbsp;&nbsp;|</router-link>
					<li><img src="../img/5.png"/>&nbsp;&nbsp;090---22511</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{}
</script>

<style scoped>
.nav-first-lyc {
	height:36px;
	background:#eee;
	}
.nav-first-content-lyc {
	width: 1280px;
	overflow: hidden;
	margin: 0 auto;
	line-height: 36px;
}
.first-content-left-lyc {
	float: left;
	font-size: 14px;
}
.first-content-left-lyc span:nth-child(3) {
	display: inline-block;
	background: url(../img/7.png) no-repeat;
	width: 20px;
	height: 7px;
	vertical-align: middle;
}
.first-content-right-lyc {
	float: right;
}
.first-content-right-lyc li {
	float: left;
	font-size: 14px;
	margin-left: 10px;
}
.first-content-right-lyc li span{color: #50943d;}
.first-content-right-lyc li img{
	vertical-align: middle;
}
.first-content-right-lyc li:last-child {
	margin-left: 10px;
	border-right: none;
}
.first-content-right-lyc li:first-child a {
	color: #569a49;
}
</style>