import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/login.vue'
import Home from '../views/home.vue'
import About from '../components/about.vue'
import Skill from '../components/skill.vue'
import Evaluate from '../components/evaluate.vue'
import Message from '../components/message.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    {
      path: '/home',
      component: Home,
      redirect: '/about',
      children: [
        { path: '/about', component: About },
        { path: '/skill', component: Skill },
        { path: '/evaluate', component: Evaluate },
        { path: '/message', component: Message }
      ]
    }
  ]
})

export default router
