<template>
	<div class="tlw-person-box">
		<div class="tlw-change-phoneNum3">
			<h5>换绑手机</h5>
			<div class="tlw-change-content3">
				<img src="../images/24.png"/>
				<img src="../images/25.png"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {}
</script>
<style lang="less" scoped>
	.tlw-person-box {
		width: 1280px;
		margin: 20px auto;
		.tlw-change-phoneNum3 {
			width: 1083px;
			height: 616px;
			border: 1px solid #CCCCCC;
			margin-left: 25px;
			h5 {
				height: 60px;
				font-size: 18px;
				line-height: 60px;
				color: #414141;
				border-bottom: 1px solid #cccccc;
				padding-left: 20px;
			}
			.tlw-change-content3{
				margin: 40px 0 0 40px;
				display: flex;
				flex-direction:column;
				align-items: flex-start;
				img:nth-of-type(2){
					margin-top: 208px;
					margin-left: 220px;
				}
			}
		}
	}
</style>