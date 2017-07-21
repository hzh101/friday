<template>
	<div class="tlw-person-box">
		<div class="tlw-person-order-null">
			<h5>我的订单</h5>
			<ul>
				<li><span class="tlw-all-active">全部</span>|</li>
				<li><span>待付款</span>|</li>
				<li><span>待发货</span>|</li>
				<li><span>待收货</span>|</li>
				<li><span>待评价</span>|</li>
				<li><span>退款/售后</span>|</li>
				<li><span>已完成/关闭</span>|</li>
			</ul>
			<a href="###">订单回收站</a>
			<div class="tlw-order-none">
				<img src="../images/19.png"/>
				<div class="tlw-none-right">
					<p>您还没有订单哦！</p>
					<button>去首页看看</button>
				</div>
			</div>
		</div>
		
	</div>
</template>

<script>
	export default {

	}
</script>
<style lang="less" scoped>
.tlw-person-box {
	width: 1280px;
	margin: 20px auto;
	.tlw-person-order-null{
		width: 1083px;
		height: 616px;
		border: 1px solid #CCCCCC;
		color: #666666;
		margin-left: 25px;
		position:relative;
		h5{
			font-size: 18px;
			font-weight: 500;
			color: #414141;
			line-height: 60px;
			border-bottom:1px solid #CCCCCC ;
			padding-left: 20px;
		}
		ul{
			width: 900px;
			display: flex;
			flex-direction: row;
			justify-content: space-around;
			margin-top: 20px;
			li{
				span{
					margin-left: 10px;
					margin-right: 18px;
					padding: 5px 15px;
					font-size: 15px;
					&:hover{
						color: white;
						background: #f08200;
					}
				}
				.tlw-all-active{
					color: white;
					background: #f08200;
				}
			}
		}
		a{
			font-size: 14px;
			color: #4b943d;
			text-decoration: underline;
			position: absolute;
			right: 20px;
			top: 83px;
		}
		.tlw-order-none{
			display: flex;
			flex-direction: row;
			position: absolute;
			top: 308px;
			left: 460px;
			.tlw-none-right{
				margin-left: 30px;
				display:flex;
				flex-direction: column;
				justify-content: space-around;
				p{
					font-size: 18px;
				}
				button{
					width: 150px;
					height: 45px;
					background: #f08200;
					border:none;
					border-radius: 6px;
					color: white;
					font-size: 20px;
					cursor: pointer;
				}
			}
		}
	}
}
</style>