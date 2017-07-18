<template>
	<div class="tlw-center-conts">
		<div class="tlw-person-center">
			<h2>个人中心</h2>
			<dl v-for="item in cont">
				<dt>{{item.dt}}<span>></span></dt>
				<dd v-for="abc in item.dd">{{abc}}</dd>
			</dl>
		</div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				cont: [{
						dt: "交易管理",
						dd: ["我的账户", "我的订单", "我的积分", "积分订单", "我的钱包", "充值卡兑换"]
					},
					{
						dt: "会员资料",
						dd: ["个人资料", "地址管理", "我的收藏", "最近浏览", "修改密码"]
					},
					{
						dt: "站内信",
						dd: ["我的消息", "意见反馈"]
					}]
			}
		}
		
	}
</script>
<style scoped>
	.tlw-center-conts {
		width: 1280px;
		/*background: pink;*/
		margin: 0 auto;
	}
	
	.tlw-person-center {
		width: 170px;
		border: 1px solid #cccccc;
		padding-left: 20px;
		color: #666666;
	}
	
	.tlw-person-center h2 {
		font-size: 24px;
		font-weight: 600;
		border-bottom: 1px solid #cccccc;
		line-height: 56px;
	}
	
	.tlw-person-center dl {
		margin: 10px 0;
	}
	
	.tlw-person-center dl dt {
		font-size: 19px;
		font-weight: 600;
	}
	
	.tlw-person-center dl dt span {
		margin-left: 50px;
	}
	
	.tlw-person-center dl dd {
		font-size: 14px;
		margin: 20px 0;
		cursor: pointer;
	}
	
	.tlw-person-center dl dd:hover {
		color: #6ba361;
		text-decoration: underline;
	}
</style>