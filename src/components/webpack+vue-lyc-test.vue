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
				background-image: url(../images/8.png);
				background-size: cover;
			}
		}
		table{
			width: 1278px;
			border: 1px solid #ddd;
			tr{
				background-color: #f2f2f2;
				th{
					line-height: 51px;
					font-size: 19px;
					font-weight: 600;
				}
			}
			tr:nth-child(1){
				width: 64px;
			}
			tr:nth-child(2){
				width: 256px;
				text-align: left;
			}
			tr:nth-child(3){
				width: 192px;
			}
			tr:nth-child(4){
				width: 192px;
			}
			tr:nth-child(5){
				width: 320px;
			}
			tr:nth-child(6){
				width: 191px;
			}
			tr:nth-child(7){
				width: 64px;
			}
		}
	}
</style>