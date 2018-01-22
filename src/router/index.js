import Vue from 'vue'
import Router from 'vue-router'
import goods from '../pages/goods/goods.vue'
import ratings from '../pages/ratings/ratings.vue'
import seller from '../pages/seller/seller.vue'


Vue.use(Router)



export default new Router({
  routes: [
    {
      path: '/',
      component: goods,
      name: '导航一',
      iconCls: 'el-icon-message',//图标样式class
      children: [
        { path: '/ratings', component: ratings, name: '002' },
        { path: '/seller', component: seller, name: '003' },
      ]
    },
    {
      path: '/',
      component: goods,
      name: '导航二',
      iconCls: 'el-icon-message',
      children: [
        { path: '/goods', component: goods, name: '001'},
        { path: '/ratings', component: ratings, name: '002' },
        { path: '/seller', component: seller, name: '003' },
      ]
    }
  ]
})
