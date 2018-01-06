import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Library from '@/containers/Library';
import Cards from '@/containers/Cards';
import Budget from '@/containers/Budget';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
    },
    {
      path: '/library',
      name: 'Library',
      component: Library,
    },
    {
      path: '/cards',
      name: 'Cards',
      component: Cards,
    },
    {
      path: '/budget',
      name: 'Budget',
      component: Budget,
    },
  ],
});
