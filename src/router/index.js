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


Vue.use(Router)

const router = new Router({
	routes: [
	    {path: '/',redirect: '/home'},
		{path: '/home',component: home,},
		{
			path: '/home/all',component: allGoods,
			children:[
				{path:'a', component:moreGoods}
			]
		},
		
		{path: '/footOne',component: footNavOne},
		{path: '/footTwo',component: footNavTwo},
		{path: '/footThree',component: footNavThree},
		{path: '/footFour',component: footNavFour},
		{path: '/footFive',component: footNavFive},
		
		{path: '/local/abc',component: local},
		{path: '/friday',component: friday},
		{path: '/integral',component: integral},
	    
	]
});
//router.afterEach((to, from, next) => {
//  console.log(from.query);
//});

export default router;
