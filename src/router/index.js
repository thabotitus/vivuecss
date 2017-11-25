import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Library from '@/containers/Library';

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
  ],
});
