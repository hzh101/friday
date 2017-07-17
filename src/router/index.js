import Vue from 'vue';
import Router from 'vue-router';

import home from 'components/home';
import local from 'components/local';
import friday from 'components/friday';
import integral from 'components/integral';
import footNavOne from 'components/footNavOne';
import footNavTwo from 'components/footNavTwo';
import footNavThree from 'components/footNavThree';
import footNavFour from 'components/footNavFour';
import footNavFive from 'components/footNavFive';

import allGoods from 'components/allGoods';
import moreGoods from 'components/moreGoods';

import typeRoute from '../data/typeRoute.json';

//用于模块测试
import tlw1 from 'components/webpack+vue-tlw-test.vue';
import tlw2 from 'components/webpack+vue-tlw-test2.vue';
import lyc1 from 'components/webpack+vue-lyc-test.vue';
import lyc2 from 'components/webpack+vue-lyc-test2.vue';



var childRoute = [];
for (var i = 0; i < typeRoute.route.length; i++) {
	childRoute.push({path:typeRoute.route[i].path, component:moreGoods});
	for (var j = 0; j<typeRoute.route[i].items.length; j++) {
		childRoute.push({path:typeRoute.route[i].items[j].path, component:moreGoods});
	}
}

//console.log(childRoute)

Vue.use(Router)

const router = new Router({
	routes: [
	    {path: '/tlw1',component: tlw1},
	    {path: '/tlw2',component: tlw2},
	    {path: '/lyc1',component: lyc1},
	    {path: '/lyc2',component: lyc2},
		
		
	    {path: '/',redirect: '/home'},
		{path: '/home',component: home},
		{
			path: '/home/all',component: allGoods,
			children:childRoute
		},
		
		{path: '/footOne',component: footNavOne},
		{path: '/footTwo',component: footNavTwo},
		{path: '/footThree',component: footNavThree},
		{path: '/footFour',component: footNavFour},
		{path: '/footFive',component: footNavFive},
		
		{path: '/local',component: local},
		{path: '/friday',component: friday},
		{path: '/integral',component: integral},
	    
	]
});
//router.afterEach((to, from, next) => {
//  console.log(from.query);
//});

export default router;
