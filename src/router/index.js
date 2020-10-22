import Vue from 'vue';
import Router from 'vue-router';
import main from './configParts/main';
import lesson from './configParts/lessonDetail';
import video from './configParts/videoPlay';
import personal from './configParts/personal';

// router lazy load
Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {// 整体视图
      path: '/',
      name: 'basic',
      redirect: '/main',
      component: () => import('@/components/BasicLayout'),
      children: [
        main,
        lesson,
        video,
        personal
      ]
    },
    {// 登录页
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login')
    },
    {// 报错
      path: '*',
      component: () => import('@/views/ErrorPage')
    }
  ]
});
