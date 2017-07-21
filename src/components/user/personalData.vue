<template>
	<div class="tlw-person-box">
		<div class="tlw-personalData">
			<h5>个人资料</h5>
			<div class="tlw-personalData-cont">
				<div class="tlw-myHeadPortrait">
					<p>当前头像：</p>
					<img src="../../images/17.png" />
					<input type="file"/>
					<em>修改</em>
				</div>
				<div class="tlw-myNickname">
					<p>昵称：</p>
					<input type="text" />
				</div>
				<div class="tlw-myGender">
					<p>性别：</p>
					<input id="boy" type="radio" name="person" checked="checked" />
					<label for="boy">男</label>
					<input id="girl" type="radio" name="person" value="女" />
					<label for="girl">女</label>
				</div>
				<div class="tlw-myBirthday">
					<p>生日：</p>
					<select id="year"></select><span>年</span>
					<select id="month"></select><span>月</span>
					<select id="day"></select><span>日</span>
				</div>
				<div class="tlw-myPhoneNum">
					<p>手机：</p>
					<input type="text" />
					<span>更换手机</span>
				</div>
				<button>确认提交</button>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		methods: {
			creatYear() {
				var year = "";
				for(var i = 1980; i < 2018; i++) {
					year += "<option>" + i + "</option>"
				}
				$("#year").html(year);
			},
			creatMonth() {
				var month = "";
				for(var j = 1; j < 13; j++) {
					month += "<option>" + j + "</option>"
				}
				$("#month").html(month);
			},
			creatDay() {
				var day = "";
				for(var m = 1; m < 32; m++) {
					day += "<option>" + m + "</option>"
				}
				$("#day").html(day);
			}
		},
		mounted() {
			this.creatYear()
			this.creatMonth()
			this.creatDay()
		}
	}
</script>
<style lang="less" scoped>
	.tlw-person-box {
		.tlw-personalData {
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
			.tlw-personalData-cont {
				font-size: 18px;
				font-weight: 200;
				.tlw-myHeadPortrait {
					/*height: 80px;*/
					/*line-height: 80px;*/
					padding: 40px 0 0 40px;
					/*background:pink;*/
					display: flex;
					flex-direction: row;
					align-items: center;
					position:relative;
					img {
						width: 70px;
						height: 70px;
						border: 3px solid #ffe313;
						border-radius: 50%;
					}
					p:nth-of-type(2) {
						font-size: 16px;
						color: #93bf8b;
						margin-left: 20px;
						cursor: pointer;
					}
					input{
						width: 60px;
						opacity: 0;
					}
					em{
						font-size: 16px;
						color: darkseagreen;
						position: absolute;
						left: 220px;
						z-index: -10;
					}
				}
				.tlw-myNickname {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-left: 75px;
					/*background: yellow;*/
					padding: 10px 0 20px 75px;
					input {
						width: 170px;
						height: 35px;
						font-size: 18px;
						font-weight: 200;
						text-indent: 10px;
						color: #666666;
						border: 1px solid #cccccc;
						background: #f4f4f4;
					}
				}
				.tlw-myGender {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-left: 75px;
					/*background: yellowgreen;*/
					padding-left: 75px;
					input {
						margin-right: 10px;
					}
					label {
						margin-right: 30px;
					}
				}
				.tlw-myBirthday {
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-left: 75px;
					/*background: pink;*/
					padding: 20px 0 20px 75px;
					select {
						display: block;
						width: 108px;
						height: 34px;
						font-size: 18px;
						font-weight: 200;
						border: 1px solid #cccccc;
						margin-right: 10px;
					}
					span {
						margin-right: 25px;
					}
				}
				.tlw-myPhoneNum{
					display: flex;
					flex-direction: row;
					align-items: center;
					padding-left: 75px;
					/*background: pink;*/
					padding:0 0 20px 75px;
					input{
						width: 170px;
						height: 35px;
						font-size: 18px;
						font-weight: 200;
						text-indent: 10px;
						color: #666666;
						border: 1px solid #cccccc;
						background: #f4f4f4;
					}
					span{
						font-size: 16px;
						color: #93bf8b;
						margin-left: 20px;
						cursor: pointer;
					}
				}
				button{
					width: 150px;
					height: 50px;
					font-size: 20px;
					color: white;
					font-weight: 100;
					background: #f08200;
					border: none;
					border-radius: 6px;
					margin: 20px 0 0 130px;
					cursor: pointer;
				}
			}
		}
	}
</style>