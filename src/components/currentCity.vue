<template>
	<div class="tlw-Current-City">
		<div @click="hide()" class="tlw-city-bg"></div>
		<div class="tlw-city-cut">
			<p>请选择您的收货地址:</p>
			<form action="" method="post">
				<select id="s_province" name="s_province"></select><em>省</em>
			    <select id="s_city" name="s_city" ></select><em>市</em>
			    <select id="s_county" name="s_county"></select><em>区县</em>
			    
			</form>
			<div class="tlw-confirm">
		    		<button @click="address()">确定</button>
		    </div>
		    <div class="tlw-location-success">
		    		<strong>定位成功</strong>
		    </div>
		</div>
	</div>
</template>

<script>
	export default {
		methods:{
			address(){
				$(".tlw-location-success").fadeIn(500);
				setTimeout(function(){
					$(".tlw-location-success").hide();
					$(".tlw-Current-City").hide();
				},1000)
				return false;
			},
			hide(){
				$(".tlw-Current-City").hide();
				return false;
			}
		}
	}
</script>
<style lang="less" scoped>
	.tlw-city-bg{
		width: 100%;
		height: 100%;
		position: fixed;
		z-index: 999999;
		background: rgba(0,0,0,0.5);
	}
	.tlw-city-cut{
		width: 700px;
		height: 360px;
		background: url(../images/city_bg.png) no-repeat;
		position: fixed;
		top: 50%;
		left: 50%;
		margin: -180px 0 0 -350px;
		z-index: 999999;
		padding: 60px 50px;
		p{
			font-size: 18px;
			color: green;
		}
		select{
			width: 140px;
			height: 35px;
			font-size: 14px;
			font-weight: 200;
			margin: 60px 0;
		}
		em{
			margin: 0 15px;
		}
		.tlw-confirm{
			text-align: center;
			button{
				width: 150px;
				height: 35px;
				background: #F08200;
				color: #FFFFFF;
				font-size: 16px;
				border:none;
				border-radius: 6px;
				position: relative;
				right: 40px;
			}
		}
		.tlw-location-success{
			width: 120px;
			height: 35px;
			background: rgba(0,0,0,0.5);
			text-align: center;
			line-height: 35px;
			color: #fff;
			font-weight: 200;
			position: relative;
			bottom: 100px;
			left: 250px;
			display: none;
		}
		
	}
</style>