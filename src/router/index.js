import Vue from 'vue'
import Router from 'vue-router'

import HomePage from './../views/HomePage.vue'
import Gen from './../views/Gen.vue'
import Londres from './../views/Londres.vue'

Vue.use(Router)

export default new Router({
    routes: [
      {
        path: '/Paris',
        component: HomePage
      },
      {
        path: '/',
        component: Gen
      },
      {
        path: '/Londres',
        component: Londres
      },
    ]
})
