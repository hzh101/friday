// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import $ from'jquery'

Vue.config.productionTip = false

//router.afterEach((to, from, next) => {
//  console.log(from.query);
//});

new Vue({
  el: '#app',
	router,
  template: '<App/>',
  components: { App },
  data:{age:5},
  
})
