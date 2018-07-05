import Vue from 'vue';
import Router from 'vue-router';
import MainPage from '../pages/Main.vue';
import Details from '../pages/Details.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Main Page',
      component: MainPage,
    },
    {
      path: '/complexes/:id',
      name: 'complexes',
      component: Details,
    },
  ],
});
