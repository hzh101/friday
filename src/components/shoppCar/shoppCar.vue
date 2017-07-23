<template>
	<div class="shopping-cart">
		<h2><span>&nbsp;</span>购物车</h2>
		<table>
			<tr>
				<th><input type="checkbox"/></th>
				<th>礼拜五生鲜</th>
				<th>规格</th>
				<th>数量</th>
				<th>单价</th>
				<th>金额</th>
				<th>操作</th>
			</tr>
			<tr>
				<td><input type="checkbox"/></td>
				<td>
					<img src="static/imgs/fish-a1.png"/>
					<strong>青柠檬</strong>
				</td>
				<td>无</td>
				<td>
					<span>-</span><input type="text" value="2"/><span>+</span>
				</td>
				<td>4</td>
				<td>4</td>
				<td>4</td>
			</tr>
		</table>
	</div>
</template>

<script>
	export default {}
</script>

<style lang="less" scoped>
	.shopping-cart{
		width: 1280px;
		margin: 0 auto;
		h2{
			font-size: 19px;
			color: #666;
			margin: 20px 0;
			span{
				display: inline-block;
				width: 20px;
				height: 18px;
				margin-right: 10px;
				background-image: url(../../images/8.png);
				background-size: cover;
			}
		}
		table{
			width: 1278px;
			border: 1px solid #ddd;
			tr:nth-of-type(1){
				background-color: #f2f2f2;
			}
			tr{
				border-bottom: 1px solid #ddd;
				th{
					line-height: 51px;
					font-size: 19px;
					font-weight: 600;
				}
				td{
					padding-top: 20px;
					padding-bottom: 20px;
					text-align: center;
				}
				th:nth-of-type(1),td:nth-of-type(1){
					width: 64px;
					text-align: center;
					input{
						width: 14px;
						height: 14px;
					}
				}
				th:nth-of-type(2),td:nth-of-type(2){
					width: 256px;
					color: #333;
					text-align: left;
					img{
						width: 80px;
						border: 1px solid #ddd;
						vertical-align: middle;
					}
					strong{
						padding-left: 5px;
					}
				}
				th:nth-of-type(3),td:nth-of-type(3){
					width: 192px;
				}
				th:nth-of-type(4),td:nth-of-type(4){
					width: 192px;
					span{
						display: inline-block;
						width: 28px;
						height: 28px;
						line-height: 25px;
						font-size: 28px;
						font-weight: 300;
						color: #333;
						background-color: #f2f2f2;
						border: 1px solid #ddd;
					}
					input{
						width: 38px;
						height: 24px;
						padding: 2px 5px;
						border: 1px solid #ddd;
						vertical-align: top;
						font-size: 18px;
						font-weight: 300;
						text-align: center;
					}
				}
				th:nth-of-type(5),td:nth-of-type(5){
					width: 320px;
				}
				th:nth-of-type(6),td:nth-of-type(6){
					width: 191px;
				}
				th:nth-of-type(7),td:nth-of-type(7){
					width: 64px;
				}
			}
		}
	}
</style>