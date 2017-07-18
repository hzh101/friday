<template>
	<div>
		<h1>tlw-测试模板</h1>
		<button class="btn1">登录</button>
		<button class="btn2">注册</button>
		<div class="tlw-register">
			<div class="tlw-register-box">
				<div class="tlw-box tlw-box-login">
					<div class="tlw-box-top">
						<h4>登录</h4>
						<span>手机验证码登录</span>
						<img src="../images/tu2.png" alt="" />
					</div>
					<div class="tlw-box-inpts">
						<input class="input1" type="text" placeholder="请输入手机号" />
						<strong class="phone"><em>!</em>请输入手机号</strong>
						<input class="input2" type="password" placeholder="请输入密码" />
						<strong class="password"><em>!</em>请输入密码</strong>
						<img src="../images/15.png" />
						<input class="input3" type="text" placeholder="验证码" />
						<strong class="code"><em>!</em>请输入验证码</strong>
						<img src="../images/16.png" />
						<span>看不清，换一张</span>
					</div>
					<div class="tlw-box-auto">
						<span><input type="checkbox" />自动登录</span>
						<p>忘记密码？</p>
					</div>
					<div class="tlw-box-btn">
						<button class="login-btn1">登录</button>
						<button class="register-btn1">会员注册</button>
						<p>提示：未注册的用户将直接注册为礼拜五用户</p>
					</div>
				</div>
				<div class="tlw-box tlw-box-zhuce">
					<div class="tlw-box-top">
						<h4>注册</h4>
					</div>
					<div class="tlw-box-inpts">
						<input class="input1" type="text" placeholder="请输入手机号" />
						<strong class="phone"><em>!</em>请输入手机号</strong>
						<input class="input2" type="password" placeholder="请输入密码" />
						<strong class="password"><em>!</em>请输入密码</strong>
						<img src="../images/15.png" />
						<input class="input3" type="text" placeholder="验证码" />
						<img src="../images/16.png" />
						<span>看不清，换一张</span>
						<strong class="code"><em>!</em>请输入验证码</strong>
						<input class="input4" type="text" placeholder="请输入手机验证码" />
						<button>手机验证码</button>
						<strong class="message"><em>!</em>请输入短信验证码</strong>
					</div>
					<div class="tlw-box-read">
						<strong><em></em></strong>
						<span>我已阅读并同意《礼拜五用户使用协议》</span>
					</div>
					<div class="tlw-box-btn">
						<button class="register-btn2">注册</button>
						<button class="login-btn2">登录</button>
					</div>
				</div>
			</div>
		</div>

	</div>
</template>

<script>
	export default{
		mounted() {
			//点击登录按钮，登录页面出现
			$(".btn1").on("click", function() {
				$(".tlw-register").css("opacity", "1")
				$(".tlw-box-login").css("opacity", "1");
				one();
				$(".login-btn").on("click", function() {
					var phoneNum = /^1[3578]\d{9}$/;
					if(!phoneNum.test($('.input1').val())) {
						$(".phone").css("opacity", "1");
						$(".input1").focus();
						return false
					}
					if($(".input2").val().length == 0 && $(".input3").val().length == 0) {
						$(".password").css("opacity", "1");
						$(".code").css("opacity", "1");
					}
				})
			})

			$(".btn2").on("click", function() {
				$(".tlw-register").css("opacity", "1")
				$(".tlw-box-zhuce").css("display", "block");
				one();
			})

			function one() {
				//当input聚焦时，此输入框的边框和内阴影出现
				$(".tlw-box-inpts>input").on("focus", function() {
					$(this).css("border", "1px solid #74afec")
					$(this).css("box-shadow", "inset 0 0 5px #74afec")
				})
				//当第一个输入框失交时，输入框的边框和内阴影出现，如果输入值为空，则显示警告语⚠️
				$(".input1").on("blur", function() {
					$(this).css("border", "1px solid #cccccc")
					$(this).css("box-shadow", "none")
					if($(this).val().length != 11) {
						$(".phone").css("opacity", "1");
					}
					if($(this).val().length == 11) {
						$(".phone").css("opacity", "0");
					}
				})
				//当第二个输入框失交时，输入框的边框和内阴影出现，如果输入值为空，则显示警告语
				$(".input2").on("blur", function() {
					$(this).css("border", "1px solid #cccccc")
					$(this).css("box-shadow", "none")
					if($(this).val().length == 0) {
						$(".password").css("opacity", "1");
					}
					if($(this).val().length > 0) {
						$(".password").css("opacity", "0");
					}
				})
				$(".input3").on("blur", function() {
					$(this).css("border", "1px solid #cccccc")
					$(this).css("box-shadow", "none")
					if($(this).val().length > 0) {
						$(".code").css("opacity", "0");
					}
				})
				$(".input4").on("blur", function() {
					$(this).css("border", "1px solid #cccccc")
					$(this).css("box-shadow", "none")
					if($(this).val().length == 0) {
						$(".message").css("opacity", "1");
					}
				})
				$(".register-btn1").on("click", function() {
					$(".tlw-box-zhuce").css("display", "block");
					$(".tlw-box-zhuce>.tlw-box-inpts>strong").css("opacity","0");
				})
				$(".login-btn2").on("click", function() {
					$(".tlw-box-zhuce").css("display", "none");
					$(".tlw-box-login>.tlw-box-inpts>strong").css("opacity","0");
				})
			}
		}
	}
	
</script>

<style scoped>
	h1{
		font-size: 30px;
		padding-left: 20px;
	}
	.tlw-register {
		width: 100%;
		height: 500px;
		min-width: 1000px;
		background: url(../images/图1.jpg) no-repeat;
		background-size: 100% 100%;
		position: relative;
		opacity: 0;
	}
	
	.tlw-register .tlw-register-box {
		width: 400px;
		height: 498px;
		background: white;
		border-top: 1px solid #cccccc;
		border-bottom: 1px solid #cccccc;
		position: absolute;
		top: 0;
		right: 200px;
		overflow: hidden;
	}
	
	.tlw-register .tlw-register-box .tlw-box {
		padding: 40px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-top {
		position: relative;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-top h4 {
		color: #707070;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-top span {
		color: #4b943d;
		font-size: 14px;
		position: absolute;
		right: 20px;
		bottom: 0;
		z-index: 0;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-top img {
		width: 14px;
		position: absolute;
		bottom: 0;
		right: 0;
		z-index: 0;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts {
		margin-top: 10px;
		position: relative;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts input {
		width: 317px;
		height: 32px;
		font-size: 14px;
		background: #f9f9f9;
		margin: 8px 0;
		border: 1px solid #cccccc;
		text-indent: 8px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts input:nth-of-type(3) {
		display: block;
		width: 130px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts strong {
		display: inline-block;
		font-size: 12px;
		color: red;
		opacity: 0;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts strong em {
		display: inline-block;
		width: 10px;
		height: 10px;
		color: white;
		text-align: center;
		border: 1px solid;
		border-radius: 50%;
		background: red;
		margin-right: 5px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts img:nth-of-type(1) {
		position: absolute;
		right: 0;
		top: 85px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts img:nth-of-type(2) {
		position: absolute;
		left: 140px;
		top: 147px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-inpts span {
		color: #ff6600;
		font-size: 13px;
		position: absolute;
		right: 5px;
		top: 155px;
		cursor: pointer;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-auto {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		font-size: 13px;
		margin-top: 46px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-auto input {
		width: 14px;
		height: 14px;
		border-radius: 4px;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-auto p {
		color: #ff6600;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn {
		position: relative;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn button {
		width: 140px;
		height: 44px;
		border: none;
		font-size: 14px;
		color: white;
		border-radius: 5px;
		margin: 18px 0;
		cursor: pointer;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn button:nth-of-type(1) {
		background: #ea5b0c;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn button:nth-of-type(2) {
		background: #4b943d;
		position: absolute;
		right: 0;
	}
	
	.tlw-register .tlw-register-box .tlw-box .tlw-box-btn p {
		font-size: 14px;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce {
		background: white;
		position: absolute;
		top: 0;
		z-index: 10;
		display: none;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-inpts input:nth-of-type(4) {
		margin-top: 10px;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-inpts button {
		border: none;
		background: #4b943d;
		position: absolute;
		bottom: 27px;
		right: 1px;
		padding: 7px 10px;
		cursor: pointer;
		color: white;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-read strong {
		display: inline-block;
		width: 11px;
		height: 11px;
		border: 1px solid deepskyblue;
		border-radius: 50%;
		text-align: center;
		line-height: 8px;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-read strong em {
		display: inline-block;
		width: 9px;
		height: 9px;
		background: deepskyblue;
		border-radius: 50%;
	}
	
	.tlw-register .tlw-register-box .tlw-box-zhuce .tlw-box-read span {
		display: inline-block;
		font-size: 12px;
		color: #666666;
		margin: 20px 0;
	}
	h1{
		font-size: 30px;
		padding-left: 20px;
	}
</style>