<template>
	<div class="tlw-person-box">
		<div class="tlw-change-phoneNum2">
			<h5>换绑手机</h5>
			<div class="tlw-change-content2">
				<img src="../images/23.png"/>
				<input type="text" placeholder="请输入新手机号"/>
				<div class="tlw-verification">
					<input type="text" placeholder="验证码"/>
					<img src="../images/16.png"/>
					<span>看不清 换一张</span>
				</div>
				<div class="tlw-getCode">
					<input type="text" placeholder="手机验证码"/>
					<strong>获取验证码</strong>
				</div>
				<button>提交验证</button>
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
		.tlw-change-phoneNum2 {
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
			.tlw-change-content2{
				margin: 40px 0 0 40px;
				display: flex;
				flex-direction:column;
				align-items: flex-start;
				img{
					/*margin-bottom: 40px;*/
				}
				input{
					width: 307px;
					height: 45px;
					border: 1px solid #cccccc;
					margin-top: 40px;
					font-size: 16px;
					font-weight: 100;
					text-indent: 10px;
				}
				.tlw-verification{
					display: flex;
					align-items: center;	
					input{
						width: 120px;
					}
					img{
						margin:40px 10px 0 20px;
					}	
					span{
						margin-top: 40px;
						color: #ea5b0c;
						font-size: 14px;
						font-weight: 200;
					}	
				}
				.tlw-getCode{
					position: relative;
					strong{
						display: inline-block;
						padding: 10px 15px;
						color: white;
						font-weight: 100;
						background: #498e3d;
						position: absolute;
						right: 6px;
						bottom: 6px;
					}
				}
				button{
					width: 150px;
					height: 50px;
					background: #f08200;
					border: none;
					color: white;
					font-size: 20px;
					font-weight: 100;
					border-radius: 6px;
					margin-top: 40px;
				}
			}
		}
	}
</style>