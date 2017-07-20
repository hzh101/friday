<template>
	<div class="tlw-person-box">
		<div class="tlw-person-order">
			<h5>我的积分</h5>
			<div class="tlw-myIntegration">
				<p>当前积分：<em>240分</em></p>
				<table>
					<tr>
						<th>积分日期</th>
						<th>变动</th>
						<th>来源</th>
					</tr>
					<tr>
						<td>2015-04-15 16:20:35</td>
						<td>+100</td>
						<td>消费赠送</td>
					</tr>
				</table>
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
		.tlw-person-order{
			width: 1083px;
			height: 618px;
			border: 1px solid #CCCCCC;
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
			.tlw-myIntegration{
				padding: 20px 20px;
				background: cornsilk;
				p{
					font-size: 17px;
					font-weight: 600;
					em{
						font-size: 20px;
						font-weight: 200;
						color: #f08200;
					}
				}
				table{
					width: 100%;
					border: 1px solid #cccccc;
					tr{
						border-bottom: 1px solid #cccccc;
						display: flex;
						justify-content: space-around;
					}
					
				}
			}
		}
	}
</style>