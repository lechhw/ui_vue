import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/home_view'
import ChartGender from '../views/chart_gender'
import SliderView from '../views/slider_view'

Vue.use(VueRouter)

export const router = new VueRouter({
  mode: 'history', // url 에서 해쉬(#) 제거
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      // path: url 주소
      path: '/home',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: HomeView,
    },
    {
      // path: url 주소
      path: '/chart_gender',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: ChartGender,
    },
    {
      // path: url 주소
      path: '/slider',
      // component: url 주소로 갔을 때 표시될 컴포넌트
      component: SliderView,
    },
  ],
})
