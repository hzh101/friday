<template>
	<div class="shopping-cart">
		<h2><span>&nbsp;</span>购物车</h2>
		<table>
			<tr>
				<th><input  @click="headAll()" type="checkbox"/></th>
				<th>礼拜五生鲜</th>
				<th>规格</th>
				<th>数量</th>
				<th>单价</th>
				<th>金额</th>
				<th>操作</th>
			</tr>
			<tr v-for="(item,index) in data">
				<td><input type="checkbox"/></td>
				<td>
					<img :src='"static/imgs/"+item.img'/>
					<strong>{{item.title}}</strong>
				</td>
				<td>无</td>
				<td>
					<span @click="sub(index)">-</span><input type="text" v-model="item.count"/><span @click="add(index)">+</span>
				</td>
				<td>¥{{item.price}}</td>
				<td>¥{{item.count*item.price}}</td>
				<td><button @click="del(index)" class="delete">删除</button></td>
			</tr>
			<tr class="foot">
				<td colspan="7">
					<div class="total">
						<strong>商品金额</strong>
						<span>¥</span>
						<span>0.00</span>
					</div>
				</td>
			</tr>
		</table>
		<div class="footHandle">
			<button @click="allCheck">全选</button>
			<button>批量删除</button>
			<button class="buy">立即购买</button>
			<div class="total">
				<strong>商品金额</strong>
				<span>¥</span>
				<span>0.00</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				data:[
					{img:"fish-a1.png",title:'橙汁',count:1,price:2},
					{img:"fish-b1.png",title:'橙汁47979',count:3,price:3},
					{img:"fish-c1.png",title:'橙汁2344',count:2,price:2}
				]
			}
		},
		methods:{
			sub(index){
				this.data[index].count--;
				if (this.data[index].count<=0) {
					this.data[index].count = 0;
				}
			},
			add(index){
				this.data[index].count++;
			},
			del(index){
				this.data.splice(index,1)
			},
			headAll(){
				if ($('.shopping-cart th input:checked').prop('checked')) {
					$('.shopping-cart td input:checkbox').prop('checked',true);
				} else{
					$('.shopping-cart td input:checkbox').prop('checked',false);
				}
			},
			allCheck(){
				$('.shopping-cart tr input:checkbox').prop('checked',true);
			}
		}
	}
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
					.delete{
						border: none;
						background-color: #fff;
						font-size: 14px;
					}
				}
			}
			.foot{
				height:69px;
				td{
					font-size: 18px;
				}
			}
		}
	}
	.footHandle{
		width: 1278px;
		margin: 50px 0;
		overflow: hidden;
		button{
			background-color: #FFFFFF;
			border: none;
			font-size: 14px;
			color: #4B943D;
			padding-top: 10px;
			margin-left: 20px;
			margin-right: 20px;
		}
		.total{
			padding-top: 10px;
		}
		.buy{
			float: right;
			width: 150px;
			font-size: 20px;
			height: 40px;
			background-color: #F08200;
			color: #fff;
			border-radius: 5px;
			padding: 0;
			margin: 0;
		}
	}
	.total{
			float:right;
			width: 300px;
			font-size: 18px;
			strong{
				color: #666;
			}
			span{
				color: red;
				font-size: 20px;
			}
			span:nth-of-type(1){
				margin-left: 20px;
			}
			span:nth-of-type(2){
				display: inline-block;
				width: 100px;
				text-align: left;
			}
		}
</style>