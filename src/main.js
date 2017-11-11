import Vue from 'vue'
import App from './App'
import VueRouter from  'vue-router'
import goods from './components/goods'
import ratings from './components/ratings'
import sell from './components/sell'
import axios from 'axios'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import detail from './components/detail'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import $ from "jquery"

Vue.use(VueAwesomeSwiper);
Vue.use(VueRouter);

const router = new VueRouter({
  mode:"history",
  routes: [
    {
    path: '/goods',
    component: goods
  },
  {
    path:"/detail/1",
        component: detail
  },
    {
      path: '/ratings',
       component: ratings
    },{

      path: '/sell',
       component: sell
    },
    {
        path:'/detail',
        component:detail
    }
  ]
});


//export default = methodsMany;
//加载的view
router.push("/goods");
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  eventHub: new Vue(),
  render: h => h(App),
  components: { App }
});

/*new Vue({
  el: '#app',
  render: h => h(App)
})*/
