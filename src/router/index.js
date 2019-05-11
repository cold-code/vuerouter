import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import params from '@/components/params'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi1,
        right: Hi2,
      }
    },
    {
      path: '/params/:newsId(\\d+)/:newsTitle',
      component: params
    },
    {
      path: '/Coldcode',
      name: 'HelloWorld',
      components: {
        default: HelloWorld,
        left: Hi2,
        right: Hi1,
      }
    }
  ]
})
